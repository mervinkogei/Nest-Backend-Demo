/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductController {
    constructor (private readonly productsService:ProductsService){}

    @Post()
    addProduct(@Body('title') productTitle: string, @Body('description') productDesc: string, @Body('price') productPrice: number) : any{
const generatedId =this.productsService.insertProduct(productTitle, productDesc, productPrice);
return {id: generatedId};
    }
}
