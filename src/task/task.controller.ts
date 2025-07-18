import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(task: Task): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Get()
  async findAllTasks(): Promise<Task[]> {
    return this.taskService.findAllTasks();
  }

  @Get(':id')
  async findTaskById(@Param('id') id: number): Promise<Task | null> {
    return this.taskService.findTaskById(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: number,
    @Body() task: Partial<Task>,
  ): Promise<Task> {
    return this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    return this.taskService.deleteTask(id);
  }
}
