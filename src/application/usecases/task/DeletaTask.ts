import { IResponseDTO } from "../../../core/dtos/response.dto";

export interface IDeleteTaskUseCase {
    execute(id: string): Promise<IResponseDTO>;
}