import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AdminModule } from "./admin/admin.module";
import { AuthController } from "./auth.controller";
import { TypegooseModule } from "nestjs-typegoose";
import { AuthModel } from "./auth.model";
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AuthModel,
        schemaOptions: {
          collection: "Auth"
        }
      }
    ]),
    UserModule,
    AdminModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {
}
