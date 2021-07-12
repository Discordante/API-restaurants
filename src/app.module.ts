import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { RestaurantsService } from './restaurants/restaurants.service';

@Module({
  imports: [],
  controllers: [AppController, RestaurantsController],
  providers: [AppService, RestaurantsService],
})
export class AppModule {}
