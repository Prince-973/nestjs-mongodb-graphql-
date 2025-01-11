import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { In, Repository } from 'typeorm';
import { CreateStudentDto } from './\/create-student.input';
import { v4 as uuid } from 'uuid';
import { StudentType } from './students.type';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async getAllStudents(): Promise<StudentType[]> {
    return await this.studentRepository.find();
  }
  async getStudentById(id: string): Promise<StudentType> {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  async createStudent(
    createStudentDto: CreateStudentDto,
  ): Promise<StudentType> {
    const { firstname, lastname } = createStudentDto;
    const student = await this.studentRepository.create({
      id: uuid(),
      firstname,
      lastname,
    });
    return await this.studentRepository.save(student);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return await this.studentRepository.find({
      where: {
        id: In(studentIds),
      },
    });
  }
}
