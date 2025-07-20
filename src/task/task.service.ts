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

  async createTask(taskData: Partial<Task>): Promise<Task> {
    // Validate required fields
    if (!taskData.title || !taskData.date) {
      throw new Error('Missing required fields: title or date');
    }
    // Set defaults for optional fields
    const task: Partial<Task> = {
      title: taskData.title,
      description: taskData.description ?? undefined,
      date: taskData.date,
      time: taskData.time ?? undefined,
      status: taskData.status ?? 'pending',
      isCompleted: taskData.isCompleted ?? false,
    };
    return this.taskRepository.save(task);
  }

  async findAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findTaskById(id: number): Promise<Task | null> {
    return this.taskRepository.findOneBy({ id });
  }

  async updateTask(id: number, taskData: Partial<Task>): Promise<Task> {
    // Only update fields that exist in the entity
    const updateFields: Partial<Task> = {};
    if (taskData.title !== undefined) {
      updateFields.title = taskData.title;
    }
    if (taskData.description !== undefined) {
      updateFields.description = taskData.description;
    }
    if (taskData.date !== undefined) {
      updateFields.date = taskData.date;
    }
    if (taskData.time !== undefined) {
      updateFields.time = taskData.time;
    }
    if (taskData.status !== undefined) {
      updateFields.status = taskData.status;
    }
    if (taskData.isCompleted !== undefined) {
      updateFields.isCompleted = taskData.isCompleted;
    }
    await this.taskRepository.update(id, updateFields);
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
