import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('restaurants')
export class RestaurantsController {
  @Get()
  findAll() {
    return `This action returns all restaurants`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} restaurant`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} restaurant`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} restaurant`;
  }
}
