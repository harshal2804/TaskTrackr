import { ICreateUserDTO } from "../../core/dtos/user/CreateUser.dto";
import { IUpdateUserDTO } from "../../core/dtos/user/UpdateUser.dto";
import { IUserInDTO } from "../../core/dtos/user/UserIn.dto";
import { IUserOutDTO } from "../../core/dtos/user/UserOut.dto";

export interface IUserRepository {
    create(data: ICreateUserDTO): Promise<IUserOutDTO>
    update(id: string, data: IUpdateUserDTO): Promise<IUserOutDTO | unknown>
    delete(id: string): Promise<boolean>
    findById(id: string): Promise<IUserInDTO | null>
    findByEmail(email: string): Promise<IUserInDTO | null>
}