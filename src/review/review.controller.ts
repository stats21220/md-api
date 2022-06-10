import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post, UseGuards,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { ReviewService } from "./review.service";
import { IdValidationPipe } from "../pipes/add-validation.pipe";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { UserPhone } from "../decorators/user-email.decorators";

@Controller("review")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() dto: CreateReviewDto, @UserPhone() phone: string) {
    console.log(phone);
    return await this.reviewService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async delete(@Param("id", IdValidationPipe) id: string) {
    const deleteDoc = await this.reviewService.delete(id);
    if (!deleteDoc) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Get("byProductId/:productId")
  async getByProductId(@Param("productId", IdValidationPipe) productId: string) {
    return await this.reviewService.findByProductId(productId);
  }
}
