import { DeleteUser } from "../../../application/usecases/user/impls/DeleteUser";
import { IController } from "../../../presentation/http/controllers/controller";
import { deleteUserController } from "../../../presentation/http/controllers/User/deleeUser.controller";
import { UserRepositoryMongoDB } from "../../database/mongoDB/repositories/user.repository";

export function deleteUserService(): IController {
    const repository = new UserRepositoryMongoDB();
    const usecase = new DeleteUser(repository);

    const controller: IController = new deleteUserController(usecase);
    return controller;
}