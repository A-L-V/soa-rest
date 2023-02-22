import { Module } from '@nestjs/common';
import { DetalleRecetaService } from './detalle-receta.service';
import { DetalleRecetaController } from './detalle-receta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleReceta } from './entities/detalle-receta.entity';
@Module({
  imports: [TypeOrmModule.forFeature([DetalleReceta])],
  controllers: [DetalleRecetaController],
  providers: [DetalleRecetaService]
})
export class DetalleRecetaModule {}
