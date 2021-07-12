import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsController } from './restaurants/restaurants.controller';

@Module({
  imports: [],
  controllers: [AppController, RestaurantsController],
  providers: [AppService],
})
export class AppModule {}
