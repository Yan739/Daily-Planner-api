import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Goal } from './goal.entity';

@Injectable()
export class GoalService {
  constructor(
    @InjectRepository(Goal)
    private goalRepository: Repository<Goal>,
  ) {}

  async createGoal(goal: Goal): Promise<Goal> {
    return this.goalRepository.save(goal);
  }

  async findAllGoals(): Promise<Goal[]> {
    return this.goalRepository.find();
  }

  async findGoalById(id: number): Promise<Goal | null> {
    return this.goalRepository.findOneBy({ id });
  }

  async updateGoal(id: number, goal: Partial<Goal>): Promise<Goal> {
    await this.goalRepository.update(id, goal);
    const updatedGoal = await this.goalRepository.findOneBy({ id });
    if (!updatedGoal) {
      throw new Error(`Goal with id ${id} not found`);
    }
    return updatedGoal;
  }

  async deleteGoal(id: number): Promise<void> {
    await this.goalRepository.delete(id);
  }
}
