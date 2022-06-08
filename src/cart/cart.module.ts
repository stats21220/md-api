import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { TypegooseModule } from "nestjs-typegoose";
import { CartModel } from "./cart.model";

@Module({
  controllers: [CartController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CartModel,
        schemaOptions: {
          collection: 'Cart'
        }
      }
    ])
  ]
})
export class CartModule {}
