import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { ITaskListCreateDTO } from "../../../../core/dtos/tasklist/TaskListCreate.dto";
import { ITaskListRepository } from "../../../repositiories/tasklist.repository";
import { ICreateTaskListUseCase } from "../CreateTaskList";

export class createTaskListUseCase implements ICreateTaskListUseCase {
    constructor(
        private repository: ITaskListRepository
    ) {}

    async execute(data: ITaskListCreateDTO): Promise<IResponseDTO> {
        const taskList = await this.repository.create(data);
        return {
            success: true,
            statusCode: 201,
            data: taskList
        };
    }
}