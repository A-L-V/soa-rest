import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';

@Controller('receta')
export class RecetaController {
  constructor(private readonly recetaService: RecetaService) {}

  @Get()
  findAll() {
    return this.recetaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recetaService.findOne(+id);
  }


 
}
