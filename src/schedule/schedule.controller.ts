import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule.entity';
import { CreateScheduleDto, UpdateScheduleDto } from './dto/schedule.dto';

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async createSchedule(@Body() createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    return this.scheduleService.createSchedule(createScheduleDto);
  }

  @Get()
  async findAllSchedules(): Promise<Schedule[]> {
    return this.scheduleService.findAllSchedules();
  }

  @Get(':id')
  async findScheduleById(@Param('id') id: number): Promise<Schedule | null> {
    return this.scheduleService.findScheduleById(id);
  }

  @Put(':id')
  async updateSchedule(
    @Param('id') id: number,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ): Promise<Schedule> {
    return this.scheduleService.updateSchedule(id, updateScheduleDto);
  }

  @Delete(':id')
  async deleteSchedule(@Param('id') id: number): Promise<void> {
    return this.scheduleService.deleteSchedule(id);
  }
}
