import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListSchema } from './list.schema';

@Module({
  imports: [
    DynamooseModule.forRoot({
      aws: {
        region: 'us-east-1',
      },
    }),

    DynamooseModule.forFeature([{ name: 'zipcodes-zip', schema: ListSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
