import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './schema/orderSchema';

@Module({
  imports:[
    MongooseModule.forFeature( [ {name:"orders", schema:OrderSchema} ] )
],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
