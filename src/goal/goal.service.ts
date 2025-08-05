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

  async createGoal(goalData: Partial<Goal>): Promise<Goal> {
    // Validate required fields
    if (!goalData.title || !goalData.date) {
      throw new Error('Missing required fields: title or date');
    }
    // Set defaults for optional fields
    const goal: Partial<Goal> = {
      title: goalData.title,
      description: goalData.description ?? undefined,
      date: goalData.date,
      isAchieved: goalData.isAchieved ?? false,
      priority: goalData.priority ?? 1,
    };
    return this.goalRepository.save(goal);
  }

  async findAllGoals(): Promise<Goal[]> {
    return this.goalRepository.find();
  }

  async findGoalById(id: number): Promise<Goal | null> {
    return this.goalRepository.findOneBy({ id });
  }

  async updateGoal(id: number, goalData: Partial<Goal>): Promise<Goal> {
    // Only update fields that exist in the entity
    const updateFields: Partial<Goal> = {};
    if (goalData.title !== undefined) {
      updateFields.title = goalData.title;
    }
    if (goalData.description !== undefined) {
      updateFields.description = goalData.description;
    }
    if (goalData.date !== undefined) {
      updateFields.date = goalData.date;
    }
    if (goalData.isAchieved !== undefined) {
      updateFields.isAchieved = goalData.isAchieved;
    }
    if (goalData.priority !== undefined) {
      updateFields.priority = goalData.priority;
    }
    await this.goalRepository.update(id, updateFields);
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
