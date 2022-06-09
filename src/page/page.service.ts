import { Injectable } from "@nestjs/common";
import { CreatePageDto } from "./dto/create-page.dto";
import { InjectModel } from "nestjs-typegoose";
import { PageModel } from "./page.model";
import { ModelType, DocumentType } from "@typegoose/typegoose/lib/types";

@Injectable()
export class PageService {
  constructor(@InjectModel(PageModel) private readonly pageModel: ModelType<PageModel>) {
  }

  async create(dto: CreatePageDto) {
    // @ts-ignore
    return this.pageModel.create(dto);
  }

  async deletePageById(id: string): Promise<DocumentType<PageModel> | null> {
    return this.pageModel.findByIdAndDelete(id).exec();
  }

  async getPageById(id: string): Promise<DocumentType<PageModel> | null> {
    return this.pageModel.findById(id).exec();
  }

  async updatePage(id: string, dto: CreatePageDto): Promise<DocumentType<PageModel> | null> {
    return this.pageModel.findByIdAndUpdate(id, dto, { new: true });
  }
}
