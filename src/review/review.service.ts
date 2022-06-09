import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType, DocumentType } from "@typegoose/typegoose/lib/types";
import { ReviewModel } from "./review.model";
import { CreateReviewDto } from "./dto/create-review.dto";
import { Types } from "mongoose";

@Injectable()
export class ReviewService {
  constructor(@InjectModel(ReviewModel) private readonly reviewModel: ModelType<ReviewModel>) {
  }

  async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    // @ts-ignore
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByProductId(productId: string): Promise<DocumentType<ReviewModel>[]> {
    return this.reviewModel.find({ productId: Types.ObjectId(productId) }).exec();
  }

  async deleteByProductId(productId: string): Promise<{
    ok?: number | undefined,
    n?: number | undefined
  } & {
    deletedCount?: number | undefined
  }> {
    return this.reviewModel.deleteMany({ productId: Types.ObjectId(productId) }).exec();
  }
}
