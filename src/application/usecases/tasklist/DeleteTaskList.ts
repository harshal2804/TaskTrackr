import { IResponseDTO } from "../../../core/dtos/response.dto";

export interface IDeletTaskListUseCase {
    execute(id: string): Promise<IResponseDTO>;
}