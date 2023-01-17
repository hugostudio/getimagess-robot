import { Module } from '@nestjs/common';
import { RobotService, QUEUE_NAME } from './robot.service';
import { RobotController } from './robot.controller';
import { BullModule } from '@nestjs/bull';
import { RobotConsumer } from './robot.consumer';

@Module({
  controllers: [RobotController],
  providers: [RobotService, RobotConsumer],
  imports: [
    BullModule.registerQueue({
      name: QUEUE_NAME,
    }),
  ],
})
export class RobotModule {}
