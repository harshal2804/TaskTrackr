import { updateTaskUseCase } from "../../../application/usecases/task/Impls/UpdateTask";
import { IController } from "../../../presentation/http/controllers/controller";
import { updateTaskController } from "../../../presentation/http/controllers/Task/updateTask.controller";
import { taskRepositoryMongoDB } from "../../database/mongoDB/repositories/task.repository";

export function updateTaskService(): IController {
    const repository = new taskRepositoryMongoDB();
    const useCase = new updateTaskUseCase(repository);

    const controller = new updateTaskController(useCase);
    return controller;
}