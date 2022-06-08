import { Module } from '@nestjs/common';
import { PageController } from './page.controller';
import { TypegooseModule } from "nestjs-typegoose";
import { PageModel } from "./page.model";

@Module({
  controllers: [PageController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: PageModel,
        schemaOptions: {
          collection: 'PageProduct'
        }
      }
    ])
  ]
})
export class PageModule {}
