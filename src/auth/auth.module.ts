import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [UserModule, AdminModule],
  controllers: [AuthController]
})
export class AuthModule {}
