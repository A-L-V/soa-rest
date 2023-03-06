import { Injectable , Post} from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  @Post()
  create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const newProducto = new Producto()
    newProducto.id=null
    newProducto.nombre = createProductoDto.nombre
    newProducto.precio = createProductoDto.precio
    newProducto.image = createProductoDto.image
    console.log("Nuevo comprobante" + newProducto.nombre)   
    return this.productoRepository.save(newProducto);
  }

  findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  findOne(id: number): Promise<Producto> {
    return this.productoRepository.findOneBy({ id });
  }


}
