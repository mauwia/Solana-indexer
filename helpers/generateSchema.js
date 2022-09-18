const fetchEventsFromJson = require("./fetchEventsFromJson");
let json = require("../stakingManager.json");
let fs = require("fs");

let createTsMongoSchemaFile = async (name, fetchJSON) => {
  console.log(fetchJSON);
  let tsFile = `
  import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
  @Schema({versionKey:false})
  export class ${name} {`;
  let array = [];
  (tsFile += `
    @Prop({
      type: String,
      required: true,
      enum: [`),
    fetchJSON.forEach((events) => {
      tsFile += `'${events.name}',`;
      array = [...array, ...events.fields];

      // events.fields.forEach((field) => {
      //   tsFile += `@Prop()
      //     ${field}:string
      //   `;
      // });
    });
  tsFile += `]
    })
    event:string
  `;
  [...new Set(array)].forEach((element) => {
    tsFile += `
    @Prop()
    ${element}:string
        `;
  });

  tsFile += `
    @Prop()
    tx_hash:string
    }
export const ${name}Schema = SchemaFactory.createForClass(${name});
    `;

  fs.writeFileSync(`solana-subgraph/src/${name.toLocaleLowerCase()}/${name.toLocaleLowerCase()}.schema.ts`, tsFile);
};

module.exports = createTsMongoSchemaFile;
