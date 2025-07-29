import { Users } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ name: 'name', nullable: false })
    name: string;
    @Column({ name: 'description', nullable: true })
    description: string;
    @Column({ name: 'price', type: 'decimal', nullable: false })
    price: number;
    @Column({ name: 'stock', type: 'int', nullable: false })
    stock: number;
    @Column({ name: 'category', nullable: true })
    category: string;
    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
    @Column({ name: 'is_active', type: 'boolean', default: true })
    isActive: boolean;
    @Column({ name: 'image_url', nullable: true })
    imageUrl: string;
    @ManyToOne(() => Users, { eager: true }) // eager é opcional
    @JoinColumn({ name: 'user_id' }) // nome da coluna no banco
    user: Users;

}
