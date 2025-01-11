import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentToLessonInput } from './assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';
import { StudentsService } from '../students/students.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentsService: StudentsService,
  ) {}
  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLessons(id);
  }

  @Query(() => [LessonType])
  getAllLesson() {
    return this.lessonService.getAllLesson();
  }

  @Mutation(() => LessonType)
  createLession(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(() => LessonType)
  assignStudentToLesson(
    @Args('assignStudnetsToLesson')
    assignStudnetsToLesson: AssignStudentToLessonInput,
  ) {
    const { lessonId, studentsIds } = assignStudnetsToLesson;
    return this.lessonService.assignStudentsToLesson(lessonId, studentsIds);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentsService.getManyStudents(lesson.students);
  }
}
