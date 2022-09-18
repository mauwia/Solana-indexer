const fetchEventsFromJson = require("./fetchEventsFromJson");
let fs = require("fs");
let json = require("../stakingManager.json");

let createTsUtilFile = async (name, fetchJSON) => {
  let tsFile = `
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
      `;
  fetchJSON.forEach((events) => {
    tsFile += `
export const ${events.name}=(event)=>{
    return {`;
    for (let i = 0; i < events.fields.length; i++) {
      tsFile += `
      ${events.fields[i]}:event.data.${events.fields[i]},`;
    }
    tsFile += `
      event:"${events.name}",
      tx_hash:event.tx_hash
      }
    };
    `;
  });

  fs.writeFileSync(
    `solana-subgraph/src/${name.toLocaleLowerCase()}/${name.toLocaleLowerCase()}utils.ts`,
    tsFile
  );
};

module.exports = createTsUtilFile;
