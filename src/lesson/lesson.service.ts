import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';
@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });
    return this.lessonRepository.save(lesson);
  }

  async getLessons(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ where: { id } });
  }

  async getAllLesson(): Promise<Lesson[]> {
    const lessons = await this.lessonRepository.find();
    // console.log(lessons);

    return lessons;
  }

  async assignStudentsToLesson(
    lessonId: string,
    studnetIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({
      where: { id: lessonId },
    });
    lesson.students = [...lesson.students, ...studnetIds];
    return this.lessonRepository.save(lesson);
  }
}
