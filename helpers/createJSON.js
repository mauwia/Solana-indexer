const fetchEventsFromJson = require("./fetchEventsFromJson");
let json = require("../stakingManager.json");
let fs = require("fs");

let createTsJSONFile = async (name, Json) => {
  let tsFile=`export const IDL:any=${Json}
    `;

  fs.writeFileSync(
    `solana-subgraph/src/${name.toLocaleLowerCase()}/IDL/IDL.ts`,
    tsFile
  );
};

module.exports = createTsJSONFile;
