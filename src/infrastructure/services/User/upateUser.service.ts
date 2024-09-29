import { IUserRepository } from "../../../application/repositiories/user.repository";
import { updateUser } from "../../../application/usecases/user/impls/UpdateUser";
import { IUpdateUserUseCase } from "../../../application/usecases/user/UpdateUser";
import { IController } from "../../../presentation/http/controllers/controller";
import { updateUserController } from "../../../presentation/http/controllers/User/updateUser.controller";
import { userRepositoryMongoDB } from "../../database/mongoDB/repositories/user.repository";

export function updateUserService(): IController {
    const repository: IUserRepository = new userRepositoryMongoDB();
    const useCase: IUpdateUserUseCase = new updateUser(repository);

    const controller: IController = new updateUserController(useCase);
    return controller;
}