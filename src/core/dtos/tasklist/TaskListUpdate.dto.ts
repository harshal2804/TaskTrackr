import { ITaskDTO } from "../task/Task.dto";

export interface IUpdateTaskListDTO {
    id?: string;
    title?: string;
    description?: string;
    tasks?: ITaskDTO[];
    owner?: string;
}