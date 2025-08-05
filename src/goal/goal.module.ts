import { Module } from '@nestjs/common';
import { GoalService } from './goal.service';
import { GoalController } from './goal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goal } from './goal.entity';

@Module({
  providers: [GoalService],
  controllers: [GoalController],
  imports: [TypeOrmModule.forFeature([Goal])],
})
export class GoalModule {}
