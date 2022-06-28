import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../company/company.entity';
import { CompanyController } from '../company/company.controller';
import { CompanyService } from '../company/company.service';
import { TeamLead } from './teamlead.entity';
import { TeamleadController } from './teamlead.controller';
import { TeamleadService } from './teamlead.service';

@Module({
  imports: [TypeOrmModule.forFeature([TeamLead])],
  controllers: [TeamleadController],
  providers: [TeamleadService],
})
export class TeamleadModule {}
