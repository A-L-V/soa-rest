import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toUnicode } from 'punycode';
import { Repository } from 'typeorm';
import { CreateComprobanteDto } from './dto/create-comprobante.dto';
import { UpdateComprobanteDto } from './dto/update-comprobante.dto';
import { Comprobante } from './entities/comprobante.entity';

@Injectable()
export class ComprobanteService {

  constructor(
    @InjectRepository(Comprobante)
    private readonly comprobanteRepository: Repository<Comprobante>,
  ) {}
  
  create(createComprobanteDto: CreateComprobanteDto): Promise<Comprobante> {
    const newComprobante = new Comprobante()
    newComprobante.id=null
    newComprobante.nombre = createComprobanteDto.nombre
    console.log("Nuevo comprobante" + newComprobante.nombre)
    return this.comprobanteRepository.save(newComprobante);
  }

  findAll() {
    return this.comprobanteRepository.find();
  }

  findOne(id: number) {
    return this.comprobanteRepository.find({
      where: {
        id,
      },
      relations: ['Producto'],
    });;
  }


  update(id: number, updateComprobanteDto: UpdateComprobanteDto) {
    return `This action updates a #${id} comprobante`;
  }

  remove(id: number) {
    return `This action removes a #${id} comprobante`;
  }
}
