import { Entity,Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Detalle } from "src/detalle/entities/detalle.entity";

@Entity({name: 'Comprobante'})
export class Comprobante {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nombre: string;

    @OneToMany(() => Detalle, Detalle => Detalle.comprobante)
    public Detalle: Detalle[];
}