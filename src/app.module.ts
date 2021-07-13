import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    RestaurantsModule,
    MongooseModule.forRoot(
      'mongodb+srv://farsante:Mofletescontraelmundo95.@cluster0.yvoz8.mongodb.net/API-restaurants',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
