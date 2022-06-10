import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class RegisterAuthDto {

  @IsEmail({ message: "Такой email уже зарегистрирован" })
  email: string;

  @IsString()
  password: string;

  @IsPhoneNumber()
  phone: string;

  @IsString({ message: "Имя должно быть строкой" })
  firstName: string;

  @IsString({ message: "Фамилия должна быть строкой" })
  lastName: string;

  @IsString({ message: "Город должен быть строкой" })
  @IsOptional()
  city?: string;

  @IsString({ message: "Адрес должен быть строкой" })
  @IsOptional()
  address?: string;
}
