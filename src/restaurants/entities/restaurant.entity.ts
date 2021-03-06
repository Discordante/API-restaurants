import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Restaurant extends Document {
  @Prop()
  name: string;

  @Prop()
  priceAvg: number;

  @Prop()
  category: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
