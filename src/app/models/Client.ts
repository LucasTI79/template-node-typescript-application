import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity('client')
export default class Client {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@CreateDateColumn({ default: () => 'now()' })
	readonly createdAt: Date;

	@UpdateDateColumn({ default: () => 'now()' })
	readonly updatedAt: Date;
}
