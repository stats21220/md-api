import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { CreatePageDto } from "./dto/create-page.dto";
import { IdValidationPipe } from "../pipes/add-validation.pipe";
import { PageService } from "./page.service";
import { PAGE_NOT_FOUND } from "./page.constants";

@Controller("page")
export class PageController {
  constructor(private readonly pageService: PageService) {
  }

  @Post("create")
  async create(@Body() dto: CreatePageDto) {
    return await this.pageService.create(dto);
  }

  @Delete(":id")
  async delete(@Param("id", IdValidationPipe) id: string) {
    const deletePage = await this.pageService.deletePageById(id);
    if (!deletePage) {
      throw new HttpException(PAGE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Get(":id")
  async get(@Param("id", IdValidationPipe) id: string) {
    const getPage = await this.pageService.getPageById(id);
    if (!getPage) {
      throw new HttpException(PAGE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return getPage;
  }

  @Patch(":id")
  async patch(@Param("id", IdValidationPipe) id: string, dto: CreatePageDto) {
    const updatePage = await this.pageService.updatePage(id, dto);
    if (!updatePage) {
      throw new HttpException(PAGE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return updatePage;
  }
}
