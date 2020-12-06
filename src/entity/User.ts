import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    email!: string

    @Column()
    password!: string

    @CreateDateColumn({name:'created_at'})
    created_at!: Date

    @UpdateDateColumn({name:'updated_at'})
    updated_at!: Date

}
