import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { ITaskListUpdateDTO } from "../../../../core/dtos/tasklist/TaskListUpdate.dto";
import { ITaskListRepository } from "../../../repositiories/tasklist.repository";
import { IUpdateTaskListUseCase } from "../UpdateTaskList";

export class updateTaskListUseCase implements IUpdateTaskListUseCase {
    constructor(
        private taskListRepository: ITaskListRepository
    ) {}

    async execute(id: string, data: ITaskListUpdateDTO): Promise<IResponseDTO> {
        const taskList = await this.taskListRepository.update(id, data);
        if(!taskList) {
            return {
                success: false,
                statusCode: 404,
                data: 'TaskList not found'
            };
        }
        return {
            success: true,
            statusCode: 200,
            data: taskList
        };
    }
}