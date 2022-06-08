import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { PageModule } from './page/page.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [ProductModule, AuthModule, CartModule, PageModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
