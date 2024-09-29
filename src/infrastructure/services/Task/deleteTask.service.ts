import { deleteTaskUseCase } from "../../../application/usecases/task/Impls/DeleteTask";
import { IController } from "../../../presentation/http/controllers/controller";
import { deleteTaskController } from "../../../presentation/http/controllers/Task/deleteTask.controller";
import { taskRepositoryMongoDB } from "../../database/mongoDB/repositories/task.repository";

export function deleteTaskService(): IController {
    const repository = new taskRepositoryMongoDB();
    const useCase = new deleteTaskUseCase(repository);

    const controller = new deleteTaskController(useCase);
    return controller;
}