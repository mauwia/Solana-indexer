
import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { SolService } from './sol.service';

@Controller('sol')
export class SolController {
  constructor(private readonly solService: SolService) {}
  @Get('/createTx')
  async createTx() {
    let response = await this.solService.createTx();
    return response;
  }
}
      