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

  async createSchedule(scheduleData: Partial<Schedule>): Promise<Schedule> {
    // Validate required fields
    if (!scheduleData.title || !scheduleData.date || !scheduleData.startTime) {
      throw new Error('Missing required fields: title, date, or startTime');
    }
    // Set defaults for optional fields
    const schedule: Partial<Schedule> = {
      title: scheduleData.title,
      description: scheduleData.description ?? undefined,
      date: scheduleData.date,
      startTime: scheduleData.startTime,
      endTime: scheduleData.endTime ?? undefined,
      status: scheduleData.status ?? 'scheduled',
      location: scheduleData.location ?? undefined,
    };
    return this.scheduleRepository.save(schedule);
  }

  async findAllSchedules(): Promise<Schedule[]> {
    return this.scheduleRepository.find();
  }

  async findScheduleById(id: number): Promise<Schedule | null> {
    return this.scheduleRepository.findOneBy({ id });
  }

  async updateSchedule(id: number, scheduleData: Partial<Schedule>): Promise<Schedule> {
    // Only update fields that exist in the entity
    const updateFields: Partial<Schedule> = {};
    if (scheduleData.title !== undefined) {
      updateFields.title = scheduleData.title;
    }
    if (scheduleData.description !== undefined) {
      updateFields.description = scheduleData.description;
    }
    if (scheduleData.date !== undefined) {
      updateFields.date = scheduleData.date;
    }
    if (scheduleData.startTime !== undefined) {
      updateFields.startTime = scheduleData.startTime;
    }
    if (scheduleData.endTime !== undefined) {
      updateFields.endTime = scheduleData.endTime;
    }
    if (scheduleData.status !== undefined) {
      updateFields.status = scheduleData.status;
    }
    if (scheduleData.location !== undefined) {
      updateFields.location = scheduleData.location;
    }
    await this.scheduleRepository.update(id, updateFields);
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
