import { Field, InputType } from '@nestjs/graphql';
import { TasksStatus } from '../tasks-status.enum';
import { IsEnum, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty({ message: 'Title must not be empty.' })
  @Length(3, 50, { message: 'Title must be between 3 and 50 characters.' })
  title: string;

  @Field()
  @IsNotEmpty({ message: 'Description must not be empty.' })
  @Length(10, 300, {
    message: 'Description must be between 10 and 300 characters.',
  })
  description: string;

  @Field(() => TasksStatus)
  @IsEnum(TasksStatus, {
    message: `Status must be one of the following: ${Object.values(TasksStatus).join(', ')}`,
  })
  status: TasksStatus;
}
