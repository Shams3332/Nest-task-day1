import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private AllProducts = [];

  create(createProductDto: CreateProductDto) {
        this.AllProducts.push(createProductDto);
        return this.AllProducts;
  }

  findAll() {
    return this.AllProducts;
  }

  update(id: number, updateProductDto: UpdateProductDto){
  
    let foundProduct = this.AllProducts.find((p,i)=>{
        
        if(p.id == id){
            this.AllProducts[i] = updateProductDto;
            return this.AllProducts[i]
        }
    })
    if(foundProduct)
        return this.AllProducts;
    else
        return {data:"Not found"}
  
}

remove(id: number) {
  const index = this.AllProducts.findIndex(product => product.id === id);
  if (index !== -1) {
    this.AllProducts.splice(index, 1);
    return this.AllProducts;
  } else {
    return { data: "Product not found" };
  }
}

}
