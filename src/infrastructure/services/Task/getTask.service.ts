import { getTaskUseCase } from "../../../application/usecases/task/Impls/GetTask";
import { IController } from "../../../presentation/http/controllers/controller";
import { getTaskController } from "../../../presentation/http/controllers/Task/getTask.controller";
import { taskRepositoryMongoDB } from "../../database/mongoDB/repositories/task.repository";

export function getTaskService(): IController {
    const repository = new taskRepositoryMongoDB();
    const useCase = new getTaskUseCase(repository);

    const controller = new getTaskController(useCase);
    return controller;
}