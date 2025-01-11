import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskType } from './tasks.type';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './input/create-task.input';

import { UpdateTaskStatusInput } from './input/update-task-status.input';

@Resolver(() => TaskType)
export class TaskResolver {
  constructor(private taskService: TasksService) {}
  @Query(() => [TaskType])
  async getTasks(): Promise<TaskType[]> {
    return this.taskService.getAllTasks();
  }

  @Query(() => TaskType)
  async getTask(@Args('id') id: string): Promise<TaskType> {
    return this.taskService.getTaskById(id);
  }

  @Mutation(() => TaskType)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<TaskType> {
    return this.taskService.createTask(createTaskInput);
  }

  @Mutation(() => TaskType)
  async updateTaskStatus(
    @Args('id') id: string,
    @Args('updateTaskStatusInput') updateTaskStatusInput: UpdateTaskStatusInput,
  ): Promise<TaskType> {
    return this.taskService.updateTaskStatus(id, updateTaskStatusInput);
  }

  @Mutation(() => Boolean)
  async deleteTask(@Args('id') id: string): Promise<boolean> {
    return this.taskService.deleteTaskById(id);
  }
}
