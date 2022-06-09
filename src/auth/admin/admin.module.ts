import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { TypegooseModule } from "nestjs-typegoose";
import { AdminModel } from "./admin.model";
import { AdminService } from './admin.service';

@Module({
  controllers: [AdminController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AdminModel,
        schemaOptions: {
          collection: 'Admin'
        }
      }
    ])
  ],
  providers: [AdminService]
})
export class AdminModule {}
