import { getUser } from "../../../application/usecases/user/impls/GetUser";
import { IController } from "../../../presentation/http/controllers/controller";
import { getUserController } from "../../../presentation/http/controllers/User/getUser.controller";
import { userRepositoryMongoDB } from "../../database/mongoDB/repositories/user.repository";

export function getUserService(): IController {
    const repository = new userRepositoryMongoDB();
    const useCase = new getUser(repository);

    const controller = new getUserController(useCase);
    return controller;
}