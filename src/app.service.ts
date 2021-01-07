import { Injectable } from '@nestjs/common';
import { Model } from 'dynamoose/dist/Model';
import { InjectModel } from 'nestjs-dynamoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('zipcodes-zip')
    private listModel: Model<any>,
  ) {}
  async getList(zip, city): Promise<any> {
    const tableData = this.listModel
      .scan(
        {
          zip: { contains: zip },
          primary_city: { contains: city },
        },
      )
      .exec();

    return tableData;
  }
}
