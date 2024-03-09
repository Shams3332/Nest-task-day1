import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('orders') private OrderModel){
}
  //private AllOrders = [];

  async create(createOrderDto: CreateOrderDto) {
    let newOrder = new this.OrderModel(createOrderDto);
    await newOrder.save();
    return newOrder;
    
  }

  async findAll() {
    let AllOrders = await this.OrderModel.find({});
        return AllOrders;
  }

  findByID(id){
    return this.OrderModel.findById(id);
}

  async update(id, order){
    
    let foundOrder = await this.OrderModel.findOneAndUpdate({_id:id}, order, {new:true});
    if(foundOrder){
        return {message:"Updated Successfully", data:foundOrder}
    }else{
        return {message:"Not Found"}
    }
  
}

  async remove(id: number) {
    await this.OrderModel.findByIdAndDelete(id);
    return {message:"Deleted Successfully"};
}

}
