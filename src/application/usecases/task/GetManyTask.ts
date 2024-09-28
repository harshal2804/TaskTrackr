import { ITaskDTO } from "../../../core/dtos/task/Task.dto";

export interface IGetManyTaskUseCase {
    execute(): Promise<ITaskDTO[]>;
}