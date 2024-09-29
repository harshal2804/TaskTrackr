import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { IUpdateUserDTO } from "../../../../core/dtos/user/UpdateUser.dto";
import { IUserRepository } from "../../../repositiories/user.repository";
import { IUpdateUserUseCase } from "../UpdateUser";

export class updateUser implements IUpdateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
    ) {}

    async execute(id: string, data: IUpdateUserDTO): Promise<IResponseDTO> {
        const user = await this.userRepository.findById(id);
        if(!user) {
            return {
                success: false,
                statusCode: 404,
                data: 'User not found'
            };
        }
        await this.userRepository.update(id, data);
        return {
            success: true,
            statusCode: 200,
            data: 'User updated successfully'
        };
    }
}