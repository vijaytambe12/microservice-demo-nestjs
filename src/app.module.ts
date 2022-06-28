import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CompanyModule } from './models/company/company.module';
import { Company } from './models/company/company.entity';
import { TeamleadService } from './models/teamlead/teamlead.service';
import { TeamleadController } from './models/teamlead/teamlead.controller';
import { TeamleadModule } from './models/teamlead/teamlead.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './models/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testpw',
      database: 'testdb',
      entities: [Company],
      synchronize: false,
      autoLoadEntities: true,
      logging: true,
    }),
    CompanyModule,
    TeamleadModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
