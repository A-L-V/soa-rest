import { Entity,Column, PrimaryGeneratedColumn, OneToOne,ManyToOne, OneToMany, JoinColumn} from "typeorm";
import { Receta } from "src/receta/entities/receta.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { join } from "path";
import { Comprobante } from "src/comprobante/entities/comprobante.entity";

@Entity({name: 'Detalle'})
export class Detalle {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    cantidad: number;

    @Column()
    comprobanteId: number;

    @Column()
    productoId: number;

    @ManyToOne(() => Comprobante, (comprobante) => comprobante.Detalle)
    public comprobante: Comprobante

    @ManyToOne(() => Producto, (producto) => producto.Detalle)
    public producto: Producto

}