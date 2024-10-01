import { IResponseDTO } from "../../../core/dtos/response.dto";
import { ILoginUser } from "../../../core/dtos/user/LoginUser.dto";

export interface ILoginUserUseCase {
    execute(data: ILoginUser): Promise<IResponseDTO>;
}