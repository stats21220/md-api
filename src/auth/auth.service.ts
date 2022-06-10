import { Injectable, UnauthorizedException } from "@nestjs/common";
import { RegisterAuthDto } from "./dto/register-auth.dto";
import { InjectModel } from "nestjs-typegoose";
import { AuthModel } from "./auth.model";
import { ModelType, DocumentType } from "@typegoose/typegoose/lib/types";
import { compare, hash, genSalt } from "bcryptjs";
import { USER_NOT_FOUND_ERROR, USER_PASSWORD_ERROR } from "./auth.constants";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthModel) private readonly authModel: ModelType<AuthModel>,
    private readonly jwtService: JwtService
  ) {
  }

  async createUser(dto: RegisterAuthDto) {
    const salt = await genSalt(10);
    const newUser = new this.authModel({
      email: dto.email,
      phone: dto.phone,
      firstName: dto.firstName,
      lastName: dto.lastName,
      city: dto.city,
      address: dto.address,
      passwordHash: await hash(dto.password, salt)
    });
    return newUser.save();
  }

  async findUser(phone: string): Promise<DocumentType<AuthModel> | null> {
    return this.authModel.findOne({ phone }).exec();
  }

  async validateUser(
    phone: string,
    password: string
  ): Promise<Pick<AuthModel, "phone">> {

    const user = await this.findUser(phone);
    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
    }
    const isCorrectPassword = await compare(password, user.passwordHash); // первый пораметр какую строку будем сравнивать а вторым пораметром с чем будем сравнивать
    if (!isCorrectPassword) {
      throw new UnauthorizedException(USER_PASSWORD_ERROR);
    }
    return {
      phone: user.phone
    };
  }

  async login(phone: string) {
    const payload = { phone }; // то что будем шифровать
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

}
