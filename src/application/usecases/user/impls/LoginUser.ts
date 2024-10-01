import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { ILoginUser } from "../../../../core/dtos/user/LoginUser.dto";
import { IPasswordHasher } from "../../../providers/PasswordHasher";
import { ITokenGenerator } from "../../../providers/TokenGenerator";
import { IUserRepository } from "../../../repositiories/user.repository";
import { ILoginUserUseCase } from "../LoginUser";

export class loginUser implements ILoginUserUseCase {

    constructor(
        private userRepository: IUserRepository,
        private passwordHash: IPasswordHasher,
        private tokenGenerator: ITokenGenerator
    ) {}

    async execute(data: ILoginUser): Promise<IResponseDTO> {
        const user = await this.userRepository.findByEmail(data.email);
        if(!user) {
            return {
                success: false,
                statusCode: 400,
                data: 'User not found'
            };
        }
        const passwordMatch = await this.passwordHash.compare(data.password, user.password);
        if(!passwordMatch) {
            return {
                success: false,
                statusCode: 400,
                data: 'Invalid password'
            };
        }
        const token = this.tokenGenerator.generate(user.id);
        return {
            success: true,
            statusCode: 200,
            data: {
                id: user.id,
                token: token
            }
        }
    }
}