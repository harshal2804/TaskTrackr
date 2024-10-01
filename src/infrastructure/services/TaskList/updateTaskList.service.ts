import { ITaskListRepository } from "../../../application/repositiories/tasklist.repository";
import { updateTaskListUseCase } from "../../../application/usecases/tasklist/impls/UpdateTaskList";
import { IUpdateTaskListUseCase } from "../../../application/usecases/tasklist/UpdateTaskList";
import { IController } from "../../../presentation/http/controllers/controller";
import { updateTaskListController } from "../../../presentation/http/controllers/TaskList/updateTaskList.controller";
import { taskListRepositoryMongoDB } from "../../database/mongoDB/repositories/tasklist.repository";

export function updateTaskListService(): IController {
    const repository: ITaskListRepository = new taskListRepositoryMongoDB();
    const useCase: IUpdateTaskListUseCase = new updateTaskListUseCase(repository);

    const controller: IController = new updateTaskListController(useCase);
    return controller;
}