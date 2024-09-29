import { IResponseDTO } from "../../../core/dtos/response.dto";

export interface IGetTaskListUseCase {
    execute(id: string): Promise<IResponseDTO>;
}