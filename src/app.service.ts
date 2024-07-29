import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    return await new Promise((resolve, _) =>
      setTimeout(() => resolve('Hello world'), 61000),
    );
  }
}
