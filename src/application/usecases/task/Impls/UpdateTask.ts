import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { IUpdateTaskDTO } from "../../../../core/dtos/task/UpdateTask.dto";
import { ITaskRepository } from "../../../repositiories/task.repository";
import { IUpdateTaskUseCase } from "../UpdateTask";

export class updateTaskUseCase implements IUpdateTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) {}        
    
    async execute(id: string, data: IUpdateTaskDTO): Promise<IResponseDTO> {
        const task = await this.taskRepository.update(id, data);
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
            data: 'Task updated successfully'
        };
    }
}