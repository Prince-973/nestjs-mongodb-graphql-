import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentsService, StudentResolver],
  exports: [StudentsService],
})
export class StudentsModule {}
