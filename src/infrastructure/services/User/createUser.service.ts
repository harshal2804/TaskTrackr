import { IPasswordHasher } from "../../../application/providers/PasswordHasher";
import { IUserRepository } from "../../../application/repositiories/user.repository";
import { ICreateUserUseCase } from "../../../application/usecases/user/CreateUser";
import { CreateUser } from "../../../application/usecases/user/impls/CreateUser";
import { IController } from "../../../presentation/http/controllers/controller";
import { CreateUserController } from "../../../presentation/http/controllers/User/createUser.controller";
import { UserRepositoryMongoDB } from "../../database/mongoDB/repositories/user.repository";
import { PasswordHasher } from "../../providers/PasswordHasher";

export function createUserService(): IController {
    const repository: IUserRepository = new UserRepositoryMongoDB();
    const passwordHasher: IPasswordHasher = new PasswordHasher
    const useCase: ICreateUserUseCase = new CreateUser(repository, passwordHasher);

    const controller: IController = new CreateUserController(useCase);
    return controller;
}