import { Request, Response, Router } from "express";
import { expressAdapter } from "../../adapters/express";
import { createUserService } from "../../../infrastructure/services/User/createUser.service";

const userRouter = Router();

userRouter.post('/', async (req: Request, res: Response): Promise<any> => {
    const adapter = await expressAdapter(req, createUserService());
    return res.status(adapter.statusCode).json(adapter.body);
});

export { userRouter };