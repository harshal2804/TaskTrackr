import { createTaskUseCase } from "../../../application/usecases/task/Impls/CreateTask";
import { IController } from "../../../presentation/http/controllers/controller";
import { createTaskController } from "../../../presentation/http/controllers/Task/createTask.controller";
import { taskRepositoryMongoDB } from "../../database/mongoDB/repositories/task.repository";

export function createTaskService(): IController {
    const repository = new taskRepositoryMongoDB();
    const useCase = new createTaskUseCase(repository);

    const controller = new createTaskController(useCase);
    return controller;
}