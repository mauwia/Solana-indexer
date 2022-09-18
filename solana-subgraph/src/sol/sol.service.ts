
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
import { Sol, SolSchema } from './sol.schema';
import * as eventUtils from './solutils';
import { IDL } from './IDL/IDL';
@Injectable()
export class SolService {
  constructor(
    @InjectModel(Sol.name)
    private readonly solModel: Model<Sol>,
  ) {}
  async createTx() {
    let connection = new Connection(clusterApiUrl('devnet'));
    let txEvents = [],
      lastTxIndex,
      totalStake = new BN(0);
    let solHistory = await this.solModel
      .find()
      .sort({ _id: -1 })
      .limit(1);

    let txSignatures = await connection.getSignaturesForAddress(
      new PublicKey("3m2Mc84UDYf3syf8ps2nED57N21igLUGZ3rc73oY4MXQ"),
    );

    let signatures = txSignatures.map((txSignature) => txSignature.signature);
    console.log(solHistory)
    if (solHistory.length) {
      signatures.splice(signatures.indexOf(solHistory[0].tx_hash));
    }
    console.log(signatures,signatures.length)

    let txs = await connection.getTransactions(signatures);
    let borsh = new BorshCoder(IDL);
    let eventParser = new EventParser(
      new PublicKey("3m2Mc84UDYf3syf8ps2nED57N21igLUGZ3rc73oY4MXQ"),
      borsh,
    );
    txs.map((tx, index) => {
     
      let e = eventParser.parseLogs(tx.meta.logMessages);
      for (const event of e) {
        if (event.name.toLocaleLowerCase() == 'unstaked'){
          txEvents.push(eventUtils.Unstaked({...event,tx_hash:tx.transaction.signatures[0]}))
        }
        else if(event.name.toLocaleLowerCase() == 'rewarddisbursed'){
          txEvents.push(eventUtils.RewardDisbursed({...event,tx_hash:tx.transaction.signatures[0]}))
        }
        else if(event.name.toLocaleLowerCase() == 'staked'){
          txEvents.push(eventUtils.Staked({...event,tx_hash:tx.transaction.signatures[0]}))
        }}
    })
    await this.solModel.insertMany(txEvents)
  }
}
          