import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports:[
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    UsersModule
  ],
})
export class AppModule {}
