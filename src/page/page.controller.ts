import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";

@Controller("page")
export class PageController {
  @Post("create")
  async create() {
  }

  @Delete(":id")
  async delete() {
  }

  @Get(":id")
  async get() {
  }

  @Patch(":id")
  async patch() {
  }

}
