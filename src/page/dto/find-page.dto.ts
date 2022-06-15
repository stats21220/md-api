import { IsString } from "class-validator";

export class FindPageDto {

  @IsString()
  firstLevelCategory: string;

}
