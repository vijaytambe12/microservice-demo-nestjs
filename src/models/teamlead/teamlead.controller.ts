import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import { TeamleadService } from './teamlead.service';
import { TeamLead } from './teamlead.entity';
import { TeamleadCreateDto } from './teamlead.createdto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('/company/:companyId/teamlead')
export class TeamleadController {
  constructor(private readonly teamleadService: TeamleadService) {}

  @Get(':id')
  findOne(@Param() params): Promise<TeamLead> {
    console.log(params);
    return this.teamleadService.findOne(params.companyId, params.id);
  }

  @Get()
  findAll(@Param() params): Promise<TeamLead[]> {
    console.log(params);
    return this.teamleadService.findAll(params.companyId);
  }

  @Post()
  save(
    @Param() params,
    @Body() teamleadCreateDto: TeamleadCreateDto,
  ): Promise<TeamLead> {
    console.log(params);
    teamleadCreateDto.company_id = params.companyId;
    return this.teamleadService.save(teamleadCreateDto);
  }
}
