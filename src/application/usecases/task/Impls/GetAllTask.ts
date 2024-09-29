import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { ITaskRepository } from "../../../repositiories/task.repository";
import { IGetManyTaskUseCase } from "../GetManyTask";

export class getManyTaskUseCase implements IGetManyTaskUseCase {
    constructor(
        private taskRepository: ITaskRepository
    ) {}

    async execute(): Promise<IResponseDTO> {
        const tasks = await this.taskRepository.findMany();
        if(!tasks) {
            return {
                success: false,
                statusCode: 404,
                data: 'Tasks not found'
            };
        }
        return {
            success: true,
            statusCode: 200,
            data: tasks
        };
    }
}