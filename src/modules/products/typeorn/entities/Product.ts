import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
class Product{
    // Declaração das variáveis
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

   @UpdateDateColumn()
    updated_at: Date;

}