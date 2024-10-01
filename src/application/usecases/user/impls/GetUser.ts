import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { IUserInDTO } from "../../../../core/dtos/user/UserIn.dto";
import { IUserRepository } from "../../../repositiories/user.repository";
import { IGetUserUseCase } from "../GetUser";

export class getUser implements IGetUserUseCase {

    constructor(
        private userRespository: IUserRepository,
    ) {}

    async execute(id: string): Promise<IResponseDTO> {
        const user: IUserInDTO | null = await this.userRespository.findById(id);
        if(!user) {
            return {
                success: false,
                statusCode: 404,
                data: 'User not found'
            };
        }
        const { password, ...userWithoutPassword } = user;
        return {
            success: true,
            statusCode: 200,
            data: userWithoutPassword
        }    
    }
}