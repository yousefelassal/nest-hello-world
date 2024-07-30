import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingModule } from './ping/ping.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PingModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
