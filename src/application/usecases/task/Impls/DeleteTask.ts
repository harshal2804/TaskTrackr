import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { ITaskRepository } from "../../../repositiories/task.repository";
import { IDeleteTaskUseCase } from "../DeletaTask";

export class deleteTaskUseCase implements IDeleteTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) {}

    async execute(id: string): Promise<IResponseDTO> {
        const task = await this.taskRepository.delete(id);
        if(!task) {
            return {
                success: false,
                statusCode: 404,
                data: 'Task not found'
            };
        }
        return {
            success: true,
            statusCode: 200,
            data: 'Task deleted successfully'
        };
    }
}