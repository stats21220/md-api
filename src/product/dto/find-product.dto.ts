import { IsArray, IsNumber, IsString } from "class-validator";

export class FindProductDto {

  @IsArray()
  @IsString({ each: true })
  category: string[];

  @IsNumber()
  limit: number;

}
