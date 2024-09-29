import { IResponseDTO } from "../../../core/dtos/response.dto";
import { ITaskListUpdateDTO } from "../../../core/dtos/tasklist/TaskListUpdate.dto";

export interface IUpdateTaskListUseCase {
    execute(id: string, data: ITaskListUpdateDTO): Promise<IResponseDTO>;
}