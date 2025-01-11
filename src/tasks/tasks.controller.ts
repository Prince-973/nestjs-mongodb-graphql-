import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './input/create-task.input';
import { UpdateTaskStatusInput } from './input/update-task-status.input';
import { Task } from './tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // Get all tasks
  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  // Get a task by ID
  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  // Create a new task
  @Post()
  async createTask(@Body() createTaskInput: CreateTaskInput): Promise<Task> {
    return this.taskService.createTask(createTaskInput);
  }

  // Update the status of a task
  @Patch(':id/status')
  async updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusInput: UpdateTaskStatusInput,
  ): Promise<Task> {
    return this.taskService.updateTaskStatus(id, updateTaskStatusInput);
  }

  // Delete a task by ID
  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<boolean> {
    return this.taskService.deleteTaskById(id);
  }
}
