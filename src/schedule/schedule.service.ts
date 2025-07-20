import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async createSchedule(schedule: Schedule): Promise<Schedule> {
    return this.scheduleRepository.save(schedule);
  }

  async findAllSchedules(): Promise<Schedule[]> {
    return this.scheduleRepository.find();
  }

  async findScheduleById(id: number): Promise<Schedule | null> {
    return this.scheduleRepository.findOneBy({ id });
  }

  async updateSchedule(
    id: number,
    schedule: Partial<Schedule>,
  ): Promise<Schedule> {
    await this.scheduleRepository.update(id, schedule);
    const updatedSchedule = await this.scheduleRepository.findOneBy({ id });
    if (!updatedSchedule) {
      throw new Error(`Schedule with id ${id} not found`);
    }
    return updatedSchedule;
  }

  async deleteSchedule(id: number): Promise<void> {
    await this.scheduleRepository.delete(id);
  }
}
