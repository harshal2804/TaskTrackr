import { ITaskListRepository } from "../../../application/repositiories/tasklist.repository";
import { IGetTaskListUseCase } from "../../../application/usecases/tasklist/GetTaskList";
import { getTaskListUseCase } from "../../../application/usecases/tasklist/impls/GetTaskList";
import { IController } from "../../../presentation/http/controllers/controller";
import { getTaskListController } from "../../../presentation/http/controllers/TaskList/getTaskList.controller";
import { taskListRepositoryMongoDB } from "../../database/mongoDB/repositories/tasklist.repository";

export function getTaskListService(): IController {
    const repository: ITaskListRepository = new taskListRepositoryMongoDB();
    const useCase: IGetTaskListUseCase = new getTaskListUseCase(repository);

    const controller: IController = new getTaskListController(useCase);
    return controller;
}