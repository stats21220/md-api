import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { PageModule } from './page/page.module';

@Module({
  imports: [MenuModule, ProductModule, AuthModule, CartModule, PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
