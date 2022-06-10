import { IsPhoneNumber, IsString } from "class-validator";

export class LoginAuthDto {

  @IsPhoneNumber()
  login: string;

  @IsString()
  password: string;
}
