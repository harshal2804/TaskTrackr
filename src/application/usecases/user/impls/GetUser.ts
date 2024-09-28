import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { IUserRepository } from "../../../repositiories/user.repository";
import { IGetUserUseCase } from "../GetUser";

export class GetUser implements IGetUserUseCase {

    constructor(
        private userRespository: IUserRepository,
    ) {}

    async execute(id: string): Promise<IResponseDTO> {
        const user = await this.userRespository.findById(id);
        if(!user) {
            return {
                success: false,
                statusCode: 404,
                data: 'User not found'
            };
        }
        return {
            success: true,
            statusCode: 200,
            data: user
        }    
    }
}