import { Injectable } from '@nestjs/common';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Establishment } from './entities/establishment.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';

@Injectable()
export class EstablishmentService {
  constructor(
    @InjectRepository(Establishment)
    private readonly establishmentRepository: Repository<Establishment>,
  ) {}

  create(createEstablishmentDto: CreateEstablishmentDto) {
    const establishment = this.establishmentRepository.create(
      createEstablishmentDto,
    );
    return this.establishmentRepository.save(establishment);
  }

  findAll() {
    return this.establishmentRepository.find();
  }

  async findOne(id: number): Promise<Establishment | null> {
    return this.establishmentRepository.findOneBy({ id: id as any });
  }

  update(id: number, updateEstablishmentDto: UpdateEstablishmentDto) {
    return `This action updates a #${id} establishment`;
  }

  remove(id: number) {
    return `This action removes a #${id} establishment`;
  }
}
