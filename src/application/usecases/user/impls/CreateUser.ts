import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { ICreateUserDTO } from "../../../../core/dtos/user/CreateUser.dto";
import { IPasswordHasher } from "../../../providers/PasswordHasher";
import { IUserRepository } from "../../../repositiories/user.repository";
import { ICreateUserUseCase } from "../CreateUser";

export class createUser implements ICreateUserUseCase {

    constructor(
        private userRepository: IUserRepository,
        private passwordHasher: IPasswordHasher
    ) { }

    async execute(data: ICreateUserDTO): Promise<IResponseDTO> {
        const userExists = await this.userRepository.findByEmail(data.email);

        if (userExists) {
            return {
                success: false,
                statusCode: 409,
                data: 'User already exists'
            };
        }

        const hashedPassword = await this.passwordHasher.hash(data.password);

        const user = await this.userRepository.create({
            ...data,
            password: hashedPassword
        });

        return {
            success: true,
            statusCode: 201,
            data: user
        };
    }
}