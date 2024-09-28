import { IResponseDTO } from "../../../core/dtos/response.dto";
import { ICreateTaskDTO } from "../../../core/dtos/task/CreateTask.dto";

export interface ICreateTaskUseCase {
    execute(data: ICreateTaskDTO): Promise<IResponseDTO>;
}