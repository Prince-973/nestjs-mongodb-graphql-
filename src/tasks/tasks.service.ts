import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './tasks.entity';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './input/create-task.input';
import { UpdateTaskStatusInput } from './input/update-task-status.input';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne({
      where: {
        id,
      },
    });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { title, description, status } = createTaskInput;

    const task = this.taskRepository.create({
      title,
      description,
      status,
    });
    return await this.taskRepository.save(task);
  }

  async updateTaskStatus(
    id: string,
    updateTaskStatusInput: UpdateTaskStatusInput,
  ): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = updateTaskStatusInput.status;
    return await this.taskRepository.save(task);
  }

  async deleteTaskById(id: string): Promise<boolean> {
    const task = await this.getTaskById(id);
    await this.taskRepository.remove(task);
    return true;
  }
}
