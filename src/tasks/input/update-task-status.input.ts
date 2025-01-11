import { InputType, Field } from '@nestjs/graphql';
import { TasksStatus } from '../tasks-status.enum';

@InputType()
export class UpdateTaskStatusInput {
  @Field(() => TasksStatus)
  status: TasksStatus;
}
