let fs = require("fs");

let createTsServiceFile = async (name, address, events) => {
  let tsFile = `
import { BadRequestException, Injectable } from '@nestjs/common';
import {
    Connection,
    PublicKey,
    clusterApiUrl,
    ParsedAccountData,
  } from '@solana/web3.js';
import {
    Program,
    AnchorProvider,
    web3,
    Wallet,
    utils,
    EventParser,
    BorshCoder,
    BN,
  } from '@project-serum/anchor';
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ${name}, ${name}Schema } from './${name.toLocaleLowerCase()}.schema';
import * as eventUtils from './${name.toLocaleLowerCase()}utils';
import { IDL } from './IDL/IDL';
@Injectable()
export class ${name}Service {
  constructor(
    @InjectModel(${name}.name)
    private readonly ${name.toLocaleLowerCase()}Model: Model<${name}>,
  ) {}
  async createTx() {
    let connection = new Connection(clusterApiUrl('devnet'));
    let txEvents = [],
      lastTxIndex,
      totalStake = new BN(0);
    let ${name.toLocaleLowerCase()}History = await this.${name.toLocaleLowerCase()}Model
      .find()
      .sort({ _id: -1 })
      .limit(1);

    let txSignatures = await connection.getSignaturesForAddress(
      new PublicKey("${address}"),
    );

    let signatures = txSignatures.map((txSignature) => txSignature.signature);
    console.log(${name.toLocaleLowerCase()}History)
    if (${name.toLocaleLowerCase()}History.length) {
      signatures.splice(signatures.indexOf(${name.toLocaleLowerCase()}History[0].tx_hash));
    }
    console.log(signatures,signatures.length)

    let txs = await connection.getTransactions(signatures);
    let borsh = new BorshCoder(IDL);
    let eventParser = new EventParser(
      new PublicKey("${address}"),
      borsh,
    );
    txs.map((tx, index) => {
     
      let e = eventParser.parseLogs(tx.meta.logMessages);
      for (const event of e) {
        if (event.name.toLocaleLowerCase() == '${events[0].name.toLocaleLowerCase()}'){
          txEvents.push(eventUtils.${
            events[0].name
          }({...event,tx_hash:tx.transaction.signatures[0]}))
        }`;
  events.shift()
  events.map((event) => {
    tsFile += `
        else if(event.name.toLocaleLowerCase() == '${event.name.toLocaleLowerCase()}'){
          txEvents.push(eventUtils.${
            event.name
          }({...event,tx_hash:tx.transaction.signatures[0]}))
        }`;
  });
  tsFile += `}
    })
    await this.${name.toLocaleLowerCase()}Model.insertMany(txEvents)
  }
}
          `;
  //         totalStake = event.data.amount.add(totalStake);
  //       else if (event.name.toLocaleLowerCase() == 'unstaked')
  //         totalStake = event.data.amount.sub(totalStake);
  //       txEvents.push({
  //         type: event.name,
  //         staker: event.data.userAdd.toString(),
  //         time: event.data.time.toString(),
  //         userStakes: event.data.stakeAmount.toString(),
  //         amount: event.data?.amount?.toString()
  //           ? event.data?.amount?.toString()
  //           : txEvents[txEvents.length - 1]?.amount,
  //         lastAccumulatedWeight:
  //         event.data.lastStakingAccumulatedWeight?.toString(),
  //         lastAccumulatedFeeWeight: event.data.lastAccumulatedFeeWeight?.toString(),
  //         userUnclaimed: event.data.totalUnclaimed.toString(),
  //         tx_hash: tx.transaction.signatures[0],
  //         totalStake,
  //       });
  //     }

  //   });
  //   console.log(await this.solanaStakeHistoryModel.insertMany(txEvents));
  // }
  // }`;

  fs.writeFileSync(
    `solana-subgraph/src/${name.toLocaleLowerCase()}/${name.toLocaleLowerCase()}.service.ts`,
    tsFile
  );
};
module.exports = createTsServiceFile;
