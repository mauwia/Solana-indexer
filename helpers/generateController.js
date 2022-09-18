let fs = require("fs");

let createTsMongoControllerFile = async (name) => {
  let tsFile = `
import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { ${name}Service } from './${name.toLocaleLowerCase()}.service';

@Controller('${name.toLocaleLowerCase()}')
export class ${name}Controller {
  constructor(private readonly ${name.toLocaleLowerCase()}Service: ${name}Service) {}
  @Get('/createTx')
  async createTx() {
    let response = await this.${name.toLocaleLowerCase()}Service.createTx();
    return response;
  }
}
      `;

  fs.writeFileSync(
    `solana-subgraph/src/${name.toLocaleLowerCase()}/${name.toLocaleLowerCase()}.controller.ts`,
    tsFile
  );
};
module.exports = createTsMongoControllerFile;
