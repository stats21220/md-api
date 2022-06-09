import { TopLevelCategoryEnum } from "../page.model";
import { IsEnum, IsOptional, IsString } from "class-validator";

export class CreatePageDto {

  @IsEnum(TopLevelCategoryEnum)
  firstLevelCategory: TopLevelCategoryEnum;

  @IsString()
  secondCategory: string;

  @IsString()
  thirdCategory?: string;

  @IsString()
  title: string;

  @IsString()
  metaTitle: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  metaDescription: string;

  @IsString()
  seoText: string;
}
