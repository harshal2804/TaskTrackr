import { IUserRepository } from "../../../application/repositiories/user.repository";
import { UpdateUser } from "../../../application/usecases/user/impls/UpdateUser";
import { IUpdateUserUseCase } from "../../../application/usecases/user/UpdateUser";
import { IController } from "../../../presentation/http/controllers/controller";
import { UpdateUserController } from "../../../presentation/http/controllers/User/updateUser.controller";
import { UserRepositoryMongoDB } from "../../database/mongoDB/repositories/user.repository";

export function updateUserService(): IController {
    const repository: IUserRepository = new UserRepositoryMongoDB();
    const useCase: IUpdateUserUseCase = new UpdateUser(repository);

    const controller: IController = new UpdateUserController(useCase);
    return controller;
}