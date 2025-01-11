import { registerEnumType } from '@nestjs/graphql';

export enum TasksStatus {
  OPEN = 'OPEN',
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
}
registerEnumType(TasksStatus, {
  name: 'TasksStatus', // This will be the name of the enum in GraphQL
});
