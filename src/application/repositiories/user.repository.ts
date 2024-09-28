import { ICreateUserDTO } from "../../core/dtos/user/CreateUser.dto";
import { IUserInDTO } from "../../core/dtos/user/UserIn.dto";
import { IUserOutDTO } from "../../core/dtos/user/UserOut.dto";

export interface IUserRepository {
    create(data: ICreateUserDTO): Promise<IUserOutDTO>
    update(id: string, data: ICreateUserDTO): Promise<IUserOutDTO>
    delete(id: string): Promise<boolean>
    findById(id: string): Promise<IUserInDTO | unknown>
    findByEmail(email: string): Promise<IUserInDTO | unknown>
}