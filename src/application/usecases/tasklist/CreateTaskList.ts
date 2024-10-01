import { IResponseDTO } from "../../../core/dtos/response.dto";
import { ICreateTaskListDTO } from "../../../core/dtos/tasklist/TaskListCreate.dto";

export interface ICreateTaskListUseCase {
    execute(data: ICreateTaskListDTO): Promise<IResponseDTO>;
}