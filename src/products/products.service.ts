import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly userRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.userRepository.create(createProductDto);
    return this.userRepository.save(product);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return this.userRepository.findOneBy({ id: id as any });
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    await this.userRepository.update(id, updateProductDto);
    const updatedProduct = await this.findOne(+id);
    if (!updatedProduct) {
      throw new Error(`Product with id ${id} not found after update.`);
    }
    return updatedProduct;
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
