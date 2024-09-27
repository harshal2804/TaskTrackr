import { IResponseDTO } from "../../../core/dtos/response.dto";

export interface IDeleteUserUseCase {
    execute(id: string): Promise<IResponseDTO>;
}