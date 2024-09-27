import { IResponseDTO } from "../../../core/dtos/response.dto";
import { ICreateUserDTO } from "../../../core/dtos/user/CreateUser.dto";

export interface ICreateUserUseCase {
    execute(data: ICreateUserDTO): Promise<IResponseDTO>;
}