import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { IUserRepository } from "../../../repositiories/user.repository";
import { IDeleteUserUseCase } from "../DeleteUser";

export class DeleteUser implements IDeleteUserUseCase {
    constructor(
        private userRepository: IUserRepository,
    ) {}

    async execute(id: string): Promise<IResponseDTO> {
        const user = await this.userRepository.findById(id);
        if(!user) {
            return {
                success: false,
                statusCode: 404,
                data: 'User not found'
            };
        }
        await this.userRepository.delete(id);
        return {
            success: true,
            statusCode: 200,
            data: 'User deleted successfully'
        };
    }
}