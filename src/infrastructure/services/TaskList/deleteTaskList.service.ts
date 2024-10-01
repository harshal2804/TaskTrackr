import { ITaskListRepository } from "../../../application/repositiories/tasklist.repository";
import { IDeleteTaskListUseCase } from "../../../application/usecases/tasklist/DeleteTaskList";
import { deleteTaskListUseCase } from "../../../application/usecases/tasklist/impls/DeleteTaskList";
import { IController } from "../../../presentation/http/controllers/controller";
import { deleteTaskListController } from "../../../presentation/http/controllers/TaskList/deleteTaskList.controller";
import { taskListRepositoryMongoDB } from "../../database/mongoDB/repositories/tasklist.repository";

export function deleteTaskListService(): IController {
    const repository: ITaskListRepository = new taskListRepositoryMongoDB();
    const useCase: IDeleteTaskListUseCase = new deleteTaskListUseCase(repository);

    const controller: IController = new deleteTaskListController(useCase);
    return controller;
}