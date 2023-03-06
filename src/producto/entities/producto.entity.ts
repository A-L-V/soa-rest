import { Entity,Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { DetalleReceta } from "src/detalle-receta/entities/detalle-receta.entity";
import { Detalle } from "src/detalle/entities/detalle.entity";
@Entity({name: 'Producto'})
export class Producto {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nombre: string;


    @Column()
    precio: number;   

    @Column()
    image: string;

    @OneToMany(() => DetalleReceta, DetalleReceta => DetalleReceta.producto)
    public DetalleReceta: DetalleReceta[];

    @OneToMany(() => Detalle, Detalle => Detalle.producto)
    public Detalle: Detalle[];
}