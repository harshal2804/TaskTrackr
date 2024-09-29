import { IResponseDTO } from "../../../core/dtos/response.dto";

export interface IGetManyTaskUseCase {
    execute(): Promise<IResponseDTO>;
}