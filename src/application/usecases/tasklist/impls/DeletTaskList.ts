import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { ITaskListRepository } from "../../../repositiories/tasklist.repository";
import { IDeletTaskListUseCase } from "../DeleteTaskList";

export class deleteTaskListUseCase implements IDeletTaskListUseCase {
    constructor(
        private repository: ITaskListRepository
    ) {}

    async execute(id: string): Promise<IResponseDTO> {
        const taskList = await this.repository.delete(id);
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
            data: 'TaskList deleted successfully'
        };
    }
}