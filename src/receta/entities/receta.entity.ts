import { Entity,Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { DetalleReceta } from "src/detalle-receta/entities/detalle-receta.entity";

@Entity({name: 'Receta'})
export class Receta {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;   

    @OneToMany(() => DetalleReceta, DetalleReceta => DetalleReceta.receta)
    public DetalleReceta: DetalleReceta[];
}