import { IResponseDTO } from "../../../core/dtos/response.dto";

export interface IGetUserUseCase {
    execute(id: string): Promise<IResponseDTO>;
}