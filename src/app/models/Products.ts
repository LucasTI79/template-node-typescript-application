import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity('products')
export default class Products {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@CreateDateColumn({ default: () => 'now()' })
	readonly createdAt: Date;

	@UpdateDateColumn({ default: () => 'now()' })
	readonly updatedAt: Date;
}
