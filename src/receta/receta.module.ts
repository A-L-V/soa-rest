import { Module } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { RecetaController } from './receta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './entities/receta.entity';
import { ProductoService } from 'src/producto/producto.service';
import { ProductoController } from 'src/producto/producto.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Receta])],
  controllers: [RecetaController],
  providers: [RecetaService]
})
export class RecetaModule {}
