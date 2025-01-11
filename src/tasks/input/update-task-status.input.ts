import { InputType, Field } from '@nestjs/graphql';
import { TasksStatus } from '../tasks-status.enum';
import { IsEnum } from 'class-validator';

@InputType()
export class UpdateTaskStatusInput {
  @Field(() => TasksStatus)
  @IsEnum(TasksStatus, {
    message: `Status must be one of the following: ${Object.values(TasksStatus).join(', ')}`,
  })
  status: TasksStatus;
}
