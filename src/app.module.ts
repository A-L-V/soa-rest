import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
const mysql = require('mysql2');
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { RecetaModule } from './receta/receta.module';
import { Producto } from './producto/entities/producto.entity';
import { Receta } from './receta/entities/receta.entity';

import { DataSource } from 'typeorm';
import { DetalleRecetaModule } from './detalle-receta/detalle-receta.module';
import { DetalleReceta } from './detalle-receta/entities/detalle-receta.entity';
import { DetalleModule } from './detalle/detalle.module';
import { ComprobanteModule } from './comprobante/comprobante.module';
import { Detalle } from './detalle/entities/detalle.entity';
import { Comprobante } from './comprobante/entities/comprobante.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'bezkttxtiz5kucwty8eh-mysql.services.clever-cloud.com',
    port: 3306,
    username: 'u6uhe2cs3xxnbzxr',
    password: 'A7Rpt38bKOCaY5S7Kdt8',
    database: 'bezkttxtiz5kucwty8eh',
    entities: [Receta,Producto,DetalleReceta, Detalle, Comprobante ],
    synchronize: true,
    autoLoadEntities: true,
  }),
  ProductoModule,
  RecetaModule,
  DetalleRecetaModule,
  DetalleModule,
  ComprobanteModule

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
