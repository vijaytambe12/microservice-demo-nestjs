import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { Like, Repository } from 'typeorm';
import { CompanyCreateDto } from './company.createdto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  findOne(id: number): Promise<Company> {
    return this.companyRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }

  save(companydto: CompanyCreateDto): Promise<Company> {
    return this.companyRepository.save(companydto);
  }

  searchByName(str: string): Promise<Company[]> {
    console.log(str);
    return this.companyRepository
      .createQueryBuilder()
      .select()
      .where('name LIKE :name', { name: '%' + str + '%' })
      .printSql()
      .getMany();
  }
}
