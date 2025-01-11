import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from 'src/students/students.type';

@ObjectType('Lesson')
export class LessonType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(() => StudentType)
  students: string[];
}
