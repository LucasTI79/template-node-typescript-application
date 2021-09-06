import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity('group')
export default class Group {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@CreateDateColumn({ default: () => 'now()' })
	readonly createdAt: Date;

	@UpdateDateColumn({ default: () => 'now()' })
	readonly updatedAt: Date;
}
