import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './endPoints/products/products.module';
import { OrdersModule } from './endPoints/orders/orders.module';

@Module({
  imports: [ProductsModule , OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
