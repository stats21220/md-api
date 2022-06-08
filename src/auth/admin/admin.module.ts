import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { TypegooseModule } from "nestjs-typegoose";
import { AdminModel } from "./admin.model";

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
  ]
})
export class AdminModule {}
