import { ITokenGenerator } from "../../application/providers/TokenGenerator";
import { Secret, sign, verify } from 'jsonwebtoken';

export class tokenGenerator implements ITokenGenerator {
    secret = process.env.JWT_SECRET as Secret;
    generate(payload: string): string {
        return sign({ payload }, this.secret, {
            expiresIn: 86400 // 24 hours
        });
    }

    verify(token: string): string | object {
        try {
            return verify(token, this.secret);
        } catch (error) {
            return "Invalid token";
        }
    }
}