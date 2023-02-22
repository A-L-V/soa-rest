import { Injectable } from '@nestjs/common';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Receta } from './entities/receta.entity';
import { Producto } from 'src/producto/entities/producto.entity';

@Injectable()
export class RecetaService {
  constructor(
    @InjectRepository(Receta)
    private RecetaRepository: Repository<Receta>,
  ) {}

  findAll(): Promise<Receta[]> {
    return this.RecetaRepository.find({relations: ['DetalleReceta','DetalleReceta.Producto']});
  }

  findOne(id: number): Promise<Receta> {
    return this.RecetaRepository.findOne(
      {
        where: {
          id,
        },
        relations: ['DetalleReceta'],
      });
3  }

}
