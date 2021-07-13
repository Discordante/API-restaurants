import { IsNumber, IsString } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly priceAvg: number;

  @IsString()
  readonly category: string;
}
