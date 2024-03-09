import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './endPoints/products/products.module';
import { OrdersModule } from './endPoints/orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule , OrdersModule ,
    MongooseModule.forRoot("mongodb://localhost:27017/nestjs")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
