import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id!: number;

    title!: string;

    description!: string;
}