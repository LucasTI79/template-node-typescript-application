import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity('subgroup')
export default class SubGroup {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@CreateDateColumn({ default: () => 'now()' })
	readonly createdAt: Date;

	@UpdateDateColumn({ default: () => 'now()' })
	readonly updatedAt: Date;
}
