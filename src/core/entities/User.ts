import { ICreateUserDTO } from "../dtos/user/CreateUser.dto";
import { IUpdateUserDTO } from "../dtos/user/UpdateUser.dto";

export interface UserInterface {
    name: string;
    email: string;
    password: string;
    role: string;
}

export class UserEntity {
    private _name: string;
    private _email: string;
    private _password: string;
    private _role: string;

    constructor({ name, email, password, role }: ICreateUserDTO) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._role = role;
    }

    get name(): string {
        return this._name;
    }
    get email(): string {
        return this._email;
    }
    get password(): string {
        return this._password;
    }
    get role(): string {
        return this._role;
    }

    create({ name, email, password, role }: ICreateUserDTO): ICreateUserDTO {
        return { name, email, password, role };
    }

    update({ name, email, password, role }: IUpdateUserDTO): IUpdateUserDTO {
        return { name, email, password, role };
    }
}