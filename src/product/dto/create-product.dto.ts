import { AvailableEnum } from "../product.model";
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class ProductCharacteristicsDto {

  @IsString()
  name: string;

  @IsString()
  value: string;
}

export class CreateProductDto {

  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string; // описание

  @IsNumber()
  price: number; //цена

  @IsNumber()
  @IsOptional()
  oldPrice?: number;

  @IsNumber()
  productCode: number;

  @IsNumber()
  @IsOptional()
  initialRating?: number;

  @IsEnum(AvailableEnum)
  available: AvailableEnum.success; // есть ли в наличии 0 нет 1 да

  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @IsArray()
  @ValidateNested()
  @Type(() => ProductCharacteristicsDto)
  characteristics?: ProductCharacteristicsDto[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
