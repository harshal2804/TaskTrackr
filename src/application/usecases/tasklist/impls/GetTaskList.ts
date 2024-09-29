import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { ITaskListRepository } from "../../../repositiories/tasklist.repository";
import { IGetTaskListUseCase } from "../GetTaskList";

export class getTaskListUseCase implements IGetTaskListUseCase {
    constructor(
        private taskListRepository: ITaskListRepository
    ) {}

    async execute(id: string): Promise<IResponseDTO> {
        const taskList = await this.taskListRepository.findById(id);
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