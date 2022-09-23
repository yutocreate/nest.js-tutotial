import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [MongooseModule, ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
