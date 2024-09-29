import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { ICreateTaskDTO } from "../../../../core/dtos/task/CreateTask.dto";
import { ITaskRepository } from "../../../repositiories/task.repository";
import { ICreateTaskUseCase } from "../CreateTask";

export class createTaskUseCase implements ICreateTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) {}

    async execute(data: ICreateTaskDTO): Promise<IResponseDTO> {
        const task = await this.taskRepository.create(data);
        return {
            success: true,
            statusCode: 201,
            data: task
        };
    }
}