import { IPasswordHasher } from "../../../application/providers/PasswordHasher";
import { ITokenGenerator } from "../../../application/providers/TokenGenerator";
import { IUserRepository } from "../../../application/repositiories/user.repository";
import { loginUser } from "../../../application/usecases/user/impls/LoginUser";
import { IController } from "../../../presentation/http/controllers/controller";
import { loginUserController } from "../../../presentation/http/controllers/User/loginUser.controller";
import { userRepositoryMongoDB } from "../../database/mongoDB/repositories/user.repository";
import { PasswordHasher } from "../../providers/PasswordHasher";
import { tokenGenerator } from "../../providers/TokenGenerator";

export function loginUserService(): IController {
    const repository: IUserRepository = new userRepositoryMongoDB();
    const passwordHasher: IPasswordHasher = new PasswordHasher();
    const tokenGen: ITokenGenerator = new tokenGenerator();
    const useCase = new loginUser(repository, passwordHasher, tokenGen);

    const controller = new loginUserController(useCase);
    return controller;
}