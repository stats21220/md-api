import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductService } from "./product.service";
import { FindProductDto } from "./dto/find-product.dto";
import { PRODUCT_NOT_FOUND } from "./product.constants";
import { IdValidationPipe } from "../pipes/add-validation.pipe";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {
  }

  @Post("create")
  async create(@Body() dto: CreateProductDto) {
    return await this.productService.create(dto);
  }

  @Delete(":id")
  async delete(@Param("id", IdValidationPipe) id: string) {
    const deleteProduct = await this.productService.deleteById(id);
    if (!deleteProduct) {
      throw new HttpException(PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(":id")
  async patch(@Param("id", IdValidationPipe) id: string, @Body() dto: CreateProductDto) {
    const updateProduct = await this.productService.updateById(id, dto);
    if (!updateProduct) {
      throw new HttpException(PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return updateProduct;
  }

  @Get(":id")
  async get(@Param("id", IdValidationPipe) id: string) {
    const product = await this.productService.getByProductId(id);
    if (!product) {
      throw new HttpException(PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Post("find")
  async find(@Body() dto: FindProductDto) {
    return this.productService.findProductWithsReview(dto);
  }
}
