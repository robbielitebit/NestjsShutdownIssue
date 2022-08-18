import { Controller, Get, OnApplicationShutdown } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnApplicationShutdown {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  onApplicationShutdown() {
    console.log('onApplicationShutdown');
  }
}
