import { Controller, Delete, Get, Post } from "@nestjs/common";

@Controller("review")
export class ReviewController {

  @Post("create")
  async create() {
  }

  @Delete(":id")
  async delete() {
  }

  @Get('byProductId/:productId')
  async getByproductId() {}

}
