import { GetUser } from "../../../application/usecases/user/impls/GetUser";
import { IController } from "../../../presentation/http/controllers/controller";
import { getUserController } from "../../../presentation/http/controllers/User/getUser.controller";
import { UserRepositoryMongoDB } from "../../database/mongoDB/repositories/user.repository";

export function getUserService(): IController {
    const repository = new UserRepositoryMongoDB();
    const useCase = new GetUser(repository);

    const controller = new getUserController(useCase);
    return controller;
}