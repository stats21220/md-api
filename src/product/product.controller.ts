import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";

@Controller("product")
export class ProductController {

  @Post("create")
  async create() {

  }

  @Delete(":id")
  async delete() {

  }

  @Patch(":id")
  async patch() {

  }

  @Get(":id")
  async get() {

  }

  @Post("find")
  async find() {

  }
}
