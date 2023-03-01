import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { UpdateDetalleDto } from './dto/update-detalle.dto';
import { Detalle } from './entities/detalle.entity';

@Injectable()
export class DetalleService {

  constructor(
    @InjectRepository(Detalle)
    private detalleRepository: Repository<Detalle>,
  ) {}

  create(createDetalleDto: CreateDetalleDto):  Promise<Detalle>  {
    return this.detalleRepository.save(createDetalleDto);
  }

  findAll() {
    return `This action returns all detalle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalle`;
  }

  update(id: number, updateDetalleDto: UpdateDetalleDto) {
    return `This action updates a #${id} detalle`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalle`;
  }
}
