import { Request, Response, NextFunction, RequestHandler } from "express";
import { tokenGenerator } from "../../../infrastructure/providers/TokenGenerator";

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers.authorization;
    if(!token) {
        res.status(401).json({ message: 'Token not provided' });
        return;
    }
    if(token.split(' ')[0] !== 'Bearer'){ 
        res.status(401).json({ message: 'Invalid token' });
        return;
    }

    const tokenValue = token.split(' ')[1];
    const tokengen = new tokenGenerator();
    if(tokengen.verify(tokenValue) === 'Invalid token') {
        res.status(401).json({ message: 'Invalid token' });
        return;
    }
    next();
}