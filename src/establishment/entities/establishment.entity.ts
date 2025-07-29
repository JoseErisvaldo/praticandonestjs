import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'establishments' })
export class Establishment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'address', nullable: false })
  address: string;
  @Column({ name: 'phone_number', nullable: false })
  phoneNumber: string;
  @Column({ name: 'email', nullable: false })
  email: string;
  @Column({ name: 'website', nullable: true })
  website?: string;
  @Column({ name: 'description', nullable: true })
  description?: string;
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
