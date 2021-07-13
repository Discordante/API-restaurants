import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly restaurantModel: Model<Restaurant>,
  ) {}

  findAll() {
    return this.restaurantModel.find().exec();
  }

  async findOne(id: string) {
    const restaurant = await this.restaurantModel.findOne({ _id: id }).exec();
    if (!restaurant) {
      throw new NotFoundException(`restaurant #${id} not found`);
    }
    return restaurant;
  }

  create(createRestaurantDto: any) {
    const restaurant = new this.restaurantModel(createRestaurantDto);
    return restaurant.save();
  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    const existingRestaurant = await this.restaurantModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updateRestaurantDto },
        { new: true },
      )
      .exec();

    if (!existingRestaurant) {
      throw new NotFoundException(`Restaurant #${id} not found`);
    }
    return existingRestaurant;
  }

  async remove(id: string) {
    const restaurant = await this.findOne(id);
    return restaurant.remove();
  }
}
