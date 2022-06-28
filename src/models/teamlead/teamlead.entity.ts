import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'team_lead' })
export class TeamLead {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  company_id: number;
  @Column()
  name: string;
}
