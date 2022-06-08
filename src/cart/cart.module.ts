import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { TypegooseModule } from "nestjs-typegoose";
import { CartModel } from "./cart.model";
import { CartService } from './cart.service';

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
  ],
  providers: [CartService]
})
export class CartModule {}
