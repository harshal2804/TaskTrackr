import { ITaskListDTO } from "../../core/dtos/tasklist/TaskList.dto";
import { ICreateTaskListDTO } from "../../core/dtos/tasklist/TaskListCreate.dto";
import { IUpdateTaskListDTO } from "../../core/dtos/tasklist/TaskListUpdate.dto";

export interface ITaskListRepository {
    create(taskList: ICreateTaskListDTO): Promise<ITaskListDTO>;
    update(id: string, taskList: IUpdateTaskListDTO): Promise<ITaskListDTO | unknown>;
    delete(id: string): Promise<boolean>;
    findById(id: string): Promise<ITaskListDTO | unknown>;
    findByIdWithoutTask(id: string): Promise<ITaskListDTO | unknown>;
    findMany(): Promise<ITaskListDTO[]>;
    findByOwner(userId: string): Promise<ITaskListDTO[]>;
}