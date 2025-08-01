import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  userId: string;

  @Column({ nullable: false })
  productId: string;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  totalPrice: number;

  @Column({ type: 'varchar', default: 'pending' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
