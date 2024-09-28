import { IPasswordHasher } from "../../application/providers/PasswordHasher";
import bcrypt from 'bcrypt';

export class PasswordHasher implements IPasswordHasher {
    async hash(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async compare(password: string, hash: string): Promise<boolean> {
       return bcrypt.compare(password, hash);
    }
}