import { Injectable } from '@nestjs/common';
import { CreateDetalleRecetaDto } from './dto/create-detalle-receta.dto';
import { UpdateDetalleRecetaDto } from './dto/update-detalle-receta.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleReceta } from './entities/detalle-receta.entity';
import { Producto } from 'src/producto/entities/producto.entity';
@Injectable()
export class DetalleRecetaService {
  
  constructor(
    @InjectRepository(DetalleReceta)
    private DetalleRecetaRepository: Repository<DetalleReceta>,
  ) {}

  findAll() {
    return this.DetalleRecetaRepository.find({relations: ['producto','receta']});
  }

  findOne(id: number) {
    return this.DetalleRecetaRepository.find({
      where: {
        id,
      },
      relations: ['Producto', 'receta'],
    });;
  }

}
