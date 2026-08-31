import { Injectable } from '@nestjs/common';
import { CreateProjetDto } from './dto/create-projet.dto';
import { UpdateProjetDto } from './dto/update-projet.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ProjetService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProjetDto: CreateProjetDto) {
    return 'This action adds a new projet';
  }

  async findAll() {
    return this.prisma.project.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} projet`;
  }

  async update(id: number, updateProjetDto: UpdateProjetDto) {
    return `This action updates a #${id} projet`;
  }

  async remove(id: number) {
    return `This action removes a #${id} projet`;
  }
}
