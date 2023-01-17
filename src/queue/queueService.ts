import { Injectable } from '@nestjs/common';
import Bull from 'bull';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class QueueService {
  setupBullProcessor = async (
    queueName: string,
    workJob: any,
    jobName?: string,
  ) => {
    const objQueue = new Bull(queueName, {
      redis: {
        port: Number(process.env.REDIS_PORT),
        host: process.env.REDIS_HOST,
      },
    });

    if (!jobName) {
      jobName = '*';
    }
    objQueue.process(jobName, async (job: any) => workJob(job));

    return objQueue;
  };
}
