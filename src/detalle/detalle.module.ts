import { Module } from '@nestjs/common';
import { DetalleService } from './detalle.service';
import { DetalleController } from './detalle.controller';
import { DetalleReceta } from 'src/detalle-receta/entities/detalle-receta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detalle } from './entities/detalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Detalle])],
  controllers: [DetalleController],
  providers: [DetalleService]
})
export class DetalleModule {}
