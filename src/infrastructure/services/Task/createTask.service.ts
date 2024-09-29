import { createTaskUseCase } from "../../../application/usecases/task/Impls/CreateTask";
import { IController } from "../../../presentation/http/controllers/controller";
import { CreateTaskController } from "../../../presentation/http/controllers/Task/createTask.controller";
import { TaskRepositoryMongoDB } from "../../database/mongoDB/repositories/task.repository";

export function createTaskService(): IController {
    const repository = new TaskRepositoryMongoDB();
    const useCase = new createTaskUseCase(repository);

    const controller = new CreateTaskController(useCase);
    return controller;
}