import { IResponseDTO } from "../../../core/dtos/response.dto";

export interface IGetTaskUseCase {
    execute(id: string): Promise<IResponseDTO>;
}