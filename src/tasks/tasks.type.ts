import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TasksStatus } from './tasks-status.enum';

@ObjectType('Task')
export class TaskType {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => TasksStatus)
  status: TasksStatus;
}
