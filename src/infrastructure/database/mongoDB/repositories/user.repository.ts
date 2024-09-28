import { IUserRepository } from "../../../../application/repositiories/user.repository";
import { ICreateUserDTO } from "../../../../core/dtos/user/CreateUser.dto";
import { IUserOutDTO } from "../../../../core/dtos/user/UserOut.dto";
import userModel from "../models/user.model";

export class UserRepositoryMongoDB implements IUserRepository {
    async create(data: ICreateUserDTO): Promise<IUserOutDTO> {
        const user = await userModel.create({
            ...data,
            createdAt: new Date()
        });
        const userOut: IUserOutDTO = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt
        }
        return userOut;
    }

    async update(id: string, data: ICreateUserDTO): Promise<IUserOutDTO> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async findById(id: string): Promise<IUserOutDTO | unknown> {
        throw new Error("Method not implemented.");
    }
    async findByEmail(email: string): Promise<IUserOutDTO | unknown> {
        const user = await userModel.findOne({ email });
        if (!user) return null;
        const userOut: IUserOutDTO = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt
        }
        return userOut;
    }


} 