import { IResponseDTO } from "../../../core/dtos/response.dto";
import { ITaskListCreateDTO } from "../../../core/dtos/tasklist/TaskListCreate.dto";

export interface ICreateTaskListUseCase {
    execute(data: ITaskListCreateDTO): Promise<IResponseDTO>;
}