import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateStudentDto } from './create-student.input';
// import { Student } from './students.entity';
import { StudentsService } from './students.service';
import { StudentType } from './students.type';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentsService) {}

  @Query(() => [StudentType])
  getAllStudents(): Promise<StudentType[]> {
    return this.studentService.getAllStudents();
  }

  @Query(() => StudentType)
  getStudentById(@Args('id') id: string): Promise<StudentType> {
    return this.studentService.getStudentById(id);
  }
  @Mutation(() => StudentType)
  createStudent(@Args('createStudentDto') createStudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }
}
