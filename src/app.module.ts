import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingModule } from './ping/ping.module';
import { UsersModule } from './users/users.module';
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [PingModule, UsersModule, NinjasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
