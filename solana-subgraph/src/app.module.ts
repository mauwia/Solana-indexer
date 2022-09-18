import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolModule } from './sol/sol.module';

@Module({
  imports: [
    AppModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    SolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
