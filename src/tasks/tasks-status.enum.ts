import { registerEnumType } from '@nestjs/graphql';

export enum TasksStatus {
  OPEN = 'OPEN',
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
}
registerEnumType(TasksStatus, {
  name: 'TasksStatus',
});
