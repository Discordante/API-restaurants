import { Injectable, NotFoundException } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
  private restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      priceAvg: 12,
      category: 'mediterranean',
    },
  ];

  findAll() {
    return this.restaurants;
  }

  findOne(id: string) {
    const restaurant = this.restaurants.find((item) => item.id === +id);
    if (!restaurant) {
      throw new NotFoundException(`restaurant #${id} not found`);
    }
    return restaurant;
  }

  create(createRestaurantDto: any) {
    this.restaurants.push(createRestaurantDto);
  }

  update(id: string, updateRestaurantDto: any) {
    const existingRestaurant = this.findOne(id);
    if (existingRestaurant) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const restaurantIndex = this.restaurants.findIndex(
      (item) => item.id === +id,
    );
    if (restaurantIndex >= 0) {
      this.restaurants.splice(restaurantIndex, 1);
    }
  }
}
