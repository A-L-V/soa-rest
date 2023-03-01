import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleRecetaService } from './detalle-receta.service';
import { CreateDetalleRecetaDto } from './dto/create-detalle-receta.dto';
import { UpdateDetalleRecetaDto } from './dto/update-detalle-receta.dto';

@Controller('detalle-receta')
export class DetalleRecetaController {
  constructor(private readonly detalleRecetaService: DetalleRecetaService) {}

  @Get()
  findAll() {
    return this.detalleRecetaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleRecetaService.findOne(+id);
  }
  
}
