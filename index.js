#!/usr/bin/env node
let fs = require("fs");
let path = require("path");
let shell = require("shelljs");
// let  chalk= require('chalk');
let inquirer = require("inquirer");
const { Connection } = require("@solana/web3.js");
let charles_key = require("../charles-keypair");
const { Wallet, AnchorProvider, Program } = require("@project-serum/anchor");
const fetchEventsFromJson = require("./helpers/fetchEventsFromJson");
const createTsMongoSchemaFile = require("./helpers/generateSchema");
let createTsMongoModuleFile = require("./helpers/generateModule");
const createTsUtilFile = require("./helpers/createUtil");
const createTsServiceFile = require("./helpers/generateService");
const createTsJSONFile = require("./helpers/createJSON");
const createTsMongoControllerFile = require("./helpers/generateController");
const NETWORK = ["testnet", "mainnet", "devnet"];
let rpc = { devnet: "https://api.devnet.solana.com" };

const QUESTIONS = [
  {
    name: "name",
    type: "input",
    message: "Project name:",
  },

  {
    name: "network",
    type: "list",
    message: "Network:",
    choices: NETWORK,
    filter: function (val) {
      return rpc[val];
    },
  },
  {
    name: "programId",
    type: "input",
    message: "Enter Program Id:",
    filter: (val, answers) => {
      return new Promise(async (resolve) => {
        let IDL = await fetchIDL(answers.network, val);
        answers.IDL = IDL;
        if (!IDL) console.log("\n IDL not found");
        resolve(val);
      });
    },
  },
  {
    askAnswered: true,
    name: "IDL",
    type: "input",
    message: "Enter IDL Location:",

    // validate: (val) => {
    //   if (
    //     val.substr(val.length - 5) == ".json"
    //     // &&
    //     // findFileByName(process.cwd(), val)
    //   ) {
    //     return true;
    //   } else {
    //     return "Please enter a valid json file";
    //   }
    // },
    filter: (val) => {
      // console.log(readFileByName(findFileByName(process.cwd(), val)));
      return readFileByName(findFileByName(process.cwd(), val));
    },
    when: (answers) => {
      return !answers.IDL;
    },
  },
];

let fetchIDL = async (RPC, programId) => {
  let connection = new Connection(RPC);
  let wallet = new Wallet(charles_key);

  let provider = new AnchorProvider(connection, wallet, {});
  let IDL = await Program.fetchIdl(programId, provider);
  return IDL;
};

let findFileByName = (dir, name) => {
  let files = fs.readdirSync(dir);
  for (let i in files) {
    let file = path.join(dir, files[i]);
    let stats = fs.statSync(file);
    if (stats.isDirectory()) {
      let found = findFileByName(file, name);
      if (found) return found;
    } else {
      if (file.indexOf(name) > -1) return file;
    }
  }
};
let readFileByName = (filePath) => {
  return fs.readFileSync(filePath, { encoding: "utf-8" });
};
// function createProject(projectPath) {
//   if (fs.existsSync(projectPath)) {
//     console.log(
//       chalk.red(`Folder ${projectPath} exists. Delete or use another name.`)
//     );
//     return false;
//   }
//   fs.mkdirSync(projectPath);
//   fs.mkdirSync(`${projectPath}/src`);
//   fs.mkdirSync(`${projectPath}/src/IDL`);

//   return true;
// }
let main = async () => {
  let answers = await inquirer.prompt(QUESTIONS);
  let IDL = JSON.parse(answers.IDL);
  shell.exec(`cd solana-subgraph && nest g module ${answers.name.toLocaleLowerCase()}`)
  // fs.mkdirSync(`solana-subgraph/src/${answers.name.toLocaleLowerCase()}`);
  fs.mkdirSync(`solana-subgraph/src/${answers.name.toLocaleLowerCase()}/IDL`);
  createTsJSONFile(answers.name, answers.IDL);

  let fetchJSON = fetchEventsFromJson(IDL);
  console.log(fetchJSON);
  createTsMongoSchemaFile(answers.name, fetchJSON);
  createTsMongoModuleFile(answers.name);
  createTsUtilFile(answers.name, fetchJSON);
  createTsServiceFile(answers.name, answers.programId, fetchJSON);
  createTsMongoControllerFile(answers.name);
};
let writeJSONFile = (filePath, data) => {
  fs.writeFileSync(filePath, data);
};

main();
function postProcessNode(targetPath) {
  shell.cd(targetPath);
  // shell.exec(`nest new ${targetPath} --package-manager=npm -g`);

  let cmd = "";

  if (shell.which("yarn")) {
    cmd = "yarn";
  } else if (shell.which("npm")) {
    cmd = "npm install";
  }
  console.log("downloading dependencies....");
  if (cmd) {
    const result = shell.exec(cmd);

    if (result.code !== 0) {
      return false;
    }
  } else {
    console.log("No yarn or npm found. Cannot run installation.");
  }

  return true;
}
CANDY_MACHINE_PROGRAM_ID = "3m2Mc84UDYf3syf8ps2nED57N21igLUGZ3rc73oY4MXQ";
