import { ITaskDTO } from "../task/Task.dto";

export interface ITaskListUpdateDTO {
    id?: string;
    title?: string;
    description?: string;
    tasks?: ITaskDTO[];
    owner?: string;
}