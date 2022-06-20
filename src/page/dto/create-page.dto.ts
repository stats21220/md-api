import { IsOptional, IsString } from "class-validator";

export class CreatePageDto {

  @IsString()
  firstLevelCategory: string;


  @IsString()
  secondCategory?: string;

  @IsOptional()
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
