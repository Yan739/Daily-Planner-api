import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './schedule.entity';

@Module({
  providers: [ScheduleService],
  controllers: [ScheduleController],
  imports: [TypeOrmModule.forFeature([Schedule])],
})
export class ScheduleModule {}
