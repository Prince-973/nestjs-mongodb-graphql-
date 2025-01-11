import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';

import { StudentsModule } from '../students/students.module';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson]), StudentsModule],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
