import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { ITaskRepository } from "../../../repositiories/task.repository";
import { IGetTaskUseCase } from "../GetTask";

export class getTaskUseCase implements IGetTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) {}

    async execute(id: string): Promise<IResponseDTO> {
        const task = await this.taskRepository.findById(id);
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
            data: task
        };
    }
}