import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GoalService } from './goal.service';
import { Goal } from './goal.entity';

@Controller('goals')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Post()
  async createGoal(@Body() goal: Goal): Promise<Goal> {
    return this.goalService.createGoal(goal);
  }

  @Get()
  async findAllGoals(): Promise<Goal[]> {
    return this.goalService.findAllGoals();
  }

  @Get(':id')
  async findGoalById(@Param('id') id: number): Promise<Goal | null> {
    return this.goalService.findGoalById(id);
  }

  @Put(':id')
  async updateGoal(
    @Param('id') id: number,
    @Body() goal: Partial<Goal>,
  ): Promise<Goal> {
    return this.goalService.updateGoal(id, goal);
  }

  @Delete(':id')
  async deleteGoal(@Param('id') id: number): Promise<void> {
    return this.goalService.deleteGoal(id);
  }
}
