import { Processor, Process } from '@nestjs/bull';
import { PROCESS_NAME, QUEUE_NAME, RobotService } from './robot.service';

@Processor(QUEUE_NAME)
export class RobotConsumer {
  constructor(private readonly robotService: RobotService) {
    console.log('RobotConsumer');
  }

  @Process(PROCESS_NAME)
  async execute(job: any) {
    await job.log(`Processing jobId :${job.id}`);
    job.returnvalue = await this.robotService.execute(job.data.data);
    await job.log(`GetImageSS = ${job.returnvalue}`);
    return job.returnvalue;
  }
}
