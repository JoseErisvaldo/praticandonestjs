import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  idCategory: string;

  @Column({ name: 'category', nullable: false })
  category: string;

  @Column({ name: 'description', nullable: true })
  description?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
