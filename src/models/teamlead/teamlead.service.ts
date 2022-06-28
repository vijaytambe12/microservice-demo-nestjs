import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from '../company/company.entity';
import { Repository } from 'typeorm';
import { CompanyCreateDto } from '../company/company.createdto';
import { TeamLead } from './teamlead.entity';
import { TeamleadCreateDto } from './teamlead.createdto';

@Injectable()
export class TeamleadService {
  constructor(
    @InjectRepository(TeamLead)
    private companyRepository: Repository<TeamLead>,
  ) {}

  findAll(companyId: number): Promise<TeamLead[]> {
    return this.companyRepository.findBy({ company_id: companyId });
  }

  findOne(companyId: number, id: number): Promise<TeamLead> {
    return this.companyRepository.findOneBy({ id, company_id: companyId });
  }

  async remove(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }

  save(teamleadCreateDto: TeamleadCreateDto): Promise<TeamLead> {
    return this.companyRepository.save(teamleadCreateDto);
  }
}
