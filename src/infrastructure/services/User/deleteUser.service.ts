import { deleteUser } from "../../../application/usecases/user/impls/DeleteUser";
import { IController } from "../../../presentation/http/controllers/controller";
import { deleteUserController } from "../../../presentation/http/controllers/User/deleteUser.controller";
import { userRepositoryMongoDB } from "../../database/mongoDB/repositories/user.repository";

export function deleteUserService(): IController {
    const repository = new userRepositoryMongoDB();
    const usecase = new deleteUser(repository);

    const controller: IController = new deleteUserController(usecase);
    return controller;
}