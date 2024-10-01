import { ITaskListRepository } from "../../../application/repositiories/tasklist.repository";
import { ICreateTaskListUseCase } from "../../../application/usecases/tasklist/CreateTaskList";
import { createTaskListUseCase } from "../../../application/usecases/tasklist/impls/CreateTaskList";
import { IController } from "../../../presentation/http/controllers/controller";
import { craeteTaskListController } from "../../../presentation/http/controllers/TaskList/createTaskList.controller";
import { taskListRepositoryMongoDB } from "../../database/mongoDB/repositories/tasklist.repository";

export function createTaskListService(): IController {
    const repository: ITaskListRepository = new taskListRepositoryMongoDB();
    const useCase: ICreateTaskListUseCase = new createTaskListUseCase(repository);

    const controller:IController = new craeteTaskListController(useCase);
    return controller;
}