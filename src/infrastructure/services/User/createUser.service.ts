import { IPasswordHasher } from "../../../application/providers/PasswordHasher";
import { IUserRepository } from "../../../application/repositiories/user.repository";
import { ICreateUserUseCase } from "../../../application/usecases/user/CreateUser";
import { createUser } from "../../../application/usecases/user/impls/CreateUser";
import { IController } from "../../../presentation/http/controllers/controller";
import { createUserController } from "../../../presentation/http/controllers/User/createUser.controller";
import { userRepositoryMongoDB } from "../../database/mongoDB/repositories/user.repository";
import { PasswordHasher } from "../../providers/PasswordHasher";

export function createUserService(): IController {
    const repository: IUserRepository = new userRepositoryMongoDB();
    const passwordHasher: IPasswordHasher = new PasswordHasher
    const useCase: ICreateUserUseCase = new createUser(repository, passwordHasher);

    const controller: IController = new createUserController(useCase);
    return controller;
}