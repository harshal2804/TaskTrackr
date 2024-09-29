import { IResponseDTO } from "../../../core/dtos/response.dto";
import { IUpdateTaskDTO } from "../../../core/dtos/task/UpdateTask.dto";

export interface IUpdateTaskUseCase {
    execute(id:string, data: IUpdateTaskDTO): Promise<IResponseDTO>;
}