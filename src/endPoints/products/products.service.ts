import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsModule } from './products.module';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('product') private productModel) {
  }

  //private AllProducts = [];


  async create(createProductDto: CreateProductDto) {
    let newProduct = new this.productModel(createProductDto); 
    await newProduct.save();
    return newProduct;
}

  async findAll() {
    let AllProducts = await this.productModel.find({});
        return AllProducts ;
  }

  findByID(id){
    return this.productModel.findById(id);
}

async update(id: string, updateProductDto: UpdateProductDto){

    let foundProduct = await this.productModel.findOneAndUpdate({_id:id}, updateProductDto, {new:true});
    if(foundProduct){
        return {message:"Updated Successfully", data:foundProduct}
    }else{
        return {message:"Not Found"}
    }

  
}

async remove(id: string) {
  await this.productModel.findByIdAndDelete(id);
    return {message:"Deleted Successfully"};
}

}
