import {
  BadRequestException,
  Body, Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { RegisterAuthDto } from "./dto/register-auth.dto";
import { LoginAuthDto } from "./dto/login-auth.dto";
import { AuthService } from "./auth.service";
import { ALREADY_REGISTERED_ERROR } from "./auth.constants";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @UsePipes(new ValidationPipe()) // для валидации данных
  @Post("register")
  async register(@Body() dto: RegisterAuthDto) {
    const user = await this.authService.findUser(dto.phone);
    if (user) {
      throw new BadRequestException(ALREADY_REGISTERED_ERROR);
    }
    return await this.authService.createUser(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post("login")
  async login(@Body() { login, password }: LoginAuthDto) {
    const { phone } = await this.authService.validateUser(login, password);
    return this.authService.login(phone);
  }
}
