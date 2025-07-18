import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async findAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findTaskById(id: number): Promise<Task | null> {
    return this.taskRepository.findOneBy({ id });
  }

  async updateTask(id: number, task: Partial<Task>): Promise<Task> {
    await this.taskRepository.update(id, task);
    const updatedTask = await this.taskRepository.findOneBy({ id });
    if (!updatedTask) {
      throw new Error(`Task with id ${id} not found`);
    }
    return updatedTask;
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
