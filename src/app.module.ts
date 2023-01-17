import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { QueueService } from './queue/queueService';
import { RobotModule } from './robot/robot.module';

dotenv.config();

@Module({
  imports: [RobotModule],
  controllers: [AppController],
  providers: [AppService, QueueService],
})
export class AppModule {}
