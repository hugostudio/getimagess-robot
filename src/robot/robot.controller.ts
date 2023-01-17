import { Controller, Post, Body, Put } from '@nestjs/common';
import { DataRobotDto } from './dto/data-robot.dto';
import { RobotService } from './robot.service';

@Controller('robot')
export class RobotController {
  constructor(private readonly robotService: RobotService) {}

  @Put('get-image')
  getImage(@Body() data: DataRobotDto) {
    return this.robotService.execute(data);
  }

  @Post('getImageQueue')
  getImageQueue(@Body() data: DataRobotDto) {
    this.robotService.addQueueMessage({ data });
    return { ok: true };
  }
}
