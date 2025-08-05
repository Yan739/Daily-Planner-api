import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { GoalService } from './goal.service';
import { Goal } from './goal.entity';
import { CreateGoalDto, UpdateGoalDto } from './dto/goal.dto';

@Controller('goals')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Post()
  async createGoal(@Body() createGoalDto: CreateGoalDto): Promise<Goal> {
    return this.goalService.createGoal(createGoalDto);
  }

  @Get()
  async findAllGoals(): Promise<Goal[]> {
    return this.goalService.findAllGoals();
  }

  @Get(':id')
  async findGoalById(@Param('id', ParseIntPipe) id: number): Promise<Goal | null> {
    const goal = await this.goalService.findGoalById(id);
    if (!goal) {
      throw new NotFoundException(`Goal with ID ${id} not found`);
    }
    return goal;
  }

  @Put(':id')
  async updateGoal(@Param('id', ParseIntPipe) id: number, @Body() updateGoalDto: UpdateGoalDto): Promise<Goal> {
    return this.goalService.updateGoal(id, updateGoalDto);
  }

  @Delete(':id')
  async deleteGoal(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.goalService.deleteGoal(id);
  }
}
