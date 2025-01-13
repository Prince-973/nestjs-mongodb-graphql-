import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { Lesson } from './lesson.entity';

@Controller('lesson')
export class LessonController {
  constructor(private lessonService: LessonService) {}

  @Post()
  async createLesson(
    @Body() createLessonInput: CreateLessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Get('/:id')
  async getLesson(@Param('id') id: string): Promise<Lesson> {
    return this.lessonService.getLessons(id);
  }

  @Get()
  async getAllLessons(): Promise<Lesson[]> {
    return this.lessonService.getAllLesson();
  }

  @Patch('/:id/students')
  async assignStudentsToLesson(
    @Param('id') lessonId: string,
    @Body('studentIds') studentIds: string[],
  ): Promise<Lesson> {
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
