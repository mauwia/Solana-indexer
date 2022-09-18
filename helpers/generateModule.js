const fetchEventsFromJson = require("./fetchEventsFromJson");
let fs = require("fs");

let createTsMongoModuleFile = async (name) => {
  let tsFile = `
import { Module } from '@nestjs/common';
import { ${name}Controller } from './${name.toLocaleLowerCase()}.controller';
import { ${name}Service } from './${name.toLocaleLowerCase()}.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ${name}, ${name}Schema } from './${name.toLocaleLowerCase()}.schema';
@Module({
imports: [
      MongooseModule.forFeature([
            {
              name: ${name}.name,
              schema: ${name}Schema,
            },
          ]),
        ],
controllers: [${name}Controller],
providers: [${name}Service],
      })
export class ${name}Module {}
      `;

  fs.writeFileSync(`solana-subgraph/src/${name.toLocaleLowerCase()}/${name.toLocaleLowerCase()}.module.ts`, tsFile);
};
module.exports=createTsMongoModuleFile;