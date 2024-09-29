import { ITaskListDTO } from "../../core/dtos/tasklist/TaskList.dto";
import { ITaskListCreateDTO } from "../../core/dtos/tasklist/TaskListCreate.dto";
import { ITaskListUpdateDTO } from "../../core/dtos/tasklist/TaskListUpdate.dto";

export interface ITaskListRepository {
    create(taskList: ITaskListCreateDTO): Promise<ITaskListDTO>;
    update(id: string, taskList: ITaskListUpdateDTO): Promise<ITaskListDTO>;
    delete(id: string): Promise<boolean>;
    findById(id: string): Promise<ITaskListDTO | unknown>;
    findMany(): Promise<ITaskListDTO[]>;
    findByOwner(userId: string): Promise<ITaskListDTO[]>;
}