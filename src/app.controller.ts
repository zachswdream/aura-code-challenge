import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/zipcode')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getList(@Query('zipcode') zipcode: string, @Query('city') city: string) {
    const response = this.appService.getList(zipcode, city);
    return response;
  }
}
