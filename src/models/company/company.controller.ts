import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.entity';
import { CompanyCreateDto } from './company.createdto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param() params): Promise<Company> {
    return this.companyService.findOne(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('search/:queryString')
  searchByName(@Param() query: { queryString: string }): Promise<Company[]> {
    console.log(query);
    return this.companyService.searchByName(query.queryString);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  save(@Body() companyDto: CompanyCreateDto): Promise<Company> {
    return this.companyService.save(companyDto);
  }
}
