import { ITaskDTO } from "../task/Task.dto";

export interface ITaskListDTO {
    id: string;
    title: string;
    description: string;
    tasks: ITaskDTO[];
    owner: string;
    createdAt: Date;
    updatedAt: Date;
}