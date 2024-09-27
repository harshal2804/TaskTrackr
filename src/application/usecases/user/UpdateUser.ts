import { IResponseDTO } from "../../../core/dtos/response.dto";
import { IUpdateUserDTO } from "../../../core/dtos/user/UpdateUser.dto";

export interface IUpdateUserUseCase {
    execute(id: string, data: IUpdateUserDTO): Promise<IResponseDTO>;
}