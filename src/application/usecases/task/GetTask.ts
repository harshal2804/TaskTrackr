import { ITaskDTO } from "../../../core/dtos/task/Task.dto";

export interface IGetTaskUseCase {
    execute(id: string): Promise<ITaskDTO>;
}