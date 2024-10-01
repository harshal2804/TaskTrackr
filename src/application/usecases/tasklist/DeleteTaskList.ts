import { IResponseDTO } from "../../../core/dtos/response.dto";

export interface IDeleteTaskListUseCase {
    execute(id: string): Promise<IResponseDTO>;
}