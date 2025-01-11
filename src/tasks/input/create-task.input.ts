import { Field, InputType } from '@nestjs/graphql';
import { TasksStatus } from '../tasks-status.enum';

@InputType()
export class CreateTaskInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => TasksStatus)
  status: TasksStatus;
}
