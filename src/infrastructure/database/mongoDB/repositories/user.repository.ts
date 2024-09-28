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

    async update(id: string, data: ICreateUserDTO): Promise<IUserOutDTO | unknown> {
        const user = await userModel.findByIdAndUpdate(id, data);
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
    async delete(id: string): Promise<boolean> {
        const user = await userModel.findByIdAndDelete(id);
        if (!user) return false;
        return true;
    }
    async findById(id: string): Promise<IUserOutDTO | unknown> {
        const user = await userModel.findById(id);
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