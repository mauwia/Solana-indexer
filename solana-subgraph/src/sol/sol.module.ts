
import { Module } from '@nestjs/common';
import { SolController } from './sol.controller';
import { SolService } from './sol.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Sol, SolSchema } from './sol.schema';
@Module({
imports: [
      MongooseModule.forFeature([
            {
              name: Sol.name,
              schema: SolSchema,
            },
          ]),
        ],
controllers: [SolController],
providers: [SolService],
      })
export class SolModule {}
      