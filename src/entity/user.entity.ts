import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rut: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

}