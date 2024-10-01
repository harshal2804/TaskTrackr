import { ICreateTaskDTO } from "../../core/dtos/task/CreateTask.dto";
import { ITaskDTO } from "../../core/dtos/task/Task.dto";
import { IUpdateTaskDTO } from "../../core/dtos/task/UpdateTask.dto";

export interface ITaskRepository {
    create(task: ICreateTaskDTO): Promise<ITaskDTO | unknown>;
    update(id: string, task: IUpdateTaskDTO): Promise<ITaskDTO | unknown>;
    delete(id: string): Promise<boolean>;
    findById(id: string): Promise<ITaskDTO | unknown>;
    findMany(): Promise<ITaskDTO[]>;
    findByAssignedTo(userId: string): Promise<ITaskDTO[]>;
}