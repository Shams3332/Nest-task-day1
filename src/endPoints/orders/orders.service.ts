import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {

  private AllOrders = [];

  create(createOrderDto: CreateOrderDto) {
    this.AllOrders.push(createOrderDto);
        return this.AllOrders;
  }

  findAll() {
    return this.AllOrders;
  }


  update(id, order){
    let foundOrder = this.AllOrders.find((o,i)=>{
      
        if(o.id == id){
            this.AllOrders[i] = order;
            return this.AllOrders[i]
        }
    })
    if(foundOrder)
        return this.AllOrders;
    else
        return {data:"Not found"}
  
}

  remove(id: number) {
    const index = this.AllOrders.findIndex(product => product.id === id);
    if (index !== -1) {
      this.AllOrders.splice(index, 1);
      return this.AllOrders;
    } else {
      return { data: "Product not found" };
    }
  }
}
