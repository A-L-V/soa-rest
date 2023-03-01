import { Entity,Column, PrimaryGeneratedColumn, OneToOne,ManyToOne, OneToMany, JoinColumn} from "typeorm";
import { Receta } from "src/receta/entities/receta.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { join } from "path";

@Entity({name: 'DetalleReceta'})
export class DetalleReceta {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    cantidad: number;

    @Column()
    recetaId: number;

    @Column()
    productoId: number;

    @ManyToOne(() => Receta, (receta) => receta.DetalleReceta)
    public receta: Receta

    @ManyToOne(() => Producto, (producto) => producto.DetalleReceta)
    public producto: Producto

}