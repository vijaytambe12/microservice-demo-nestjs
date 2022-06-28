import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { TeamLead } from '../teamlead/teamlead.entity';

@Entity({ name: 'company' })
export class Company {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  ceo_name: string;

  @Column()
  address: string;

  @CreateDateColumn({ type: 'datetime' })
  inception_date: Date;

  @OneToMany((type) => TeamLead, (teamLead) => teamLead.company_id)
  teamLeads: TeamLead[];
}
