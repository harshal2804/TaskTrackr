import { Request, Response, Router } from "express";
import { expressAdapter } from "../../adapters/express";
import { createUserService } from "../../../infrastructure/services/User/createUser.service";
import { updateUserService } from "../../../infrastructure/services/User/upateUser.service";
import { getUserService } from "../../../infrastructure/services/User/getUserService.service";
import { deleteUserService } from "../../../infrastructure/services/User/deleteUser.service";
import { authMiddleware } from "../middlewares/auth.middleware";
import { loginUserService } from "../../../infrastructure/services/User/loginUser.service";

const userRouter = Router();

userRouter.post('/', async (req: Request, res: Response): Promise<any> => {
    const adapter = await expressAdapter(req, createUserService());
    return res.status(adapter.statusCode).json(adapter.body);
});

userRouter.patch('/:id', authMiddleware, async (req: Request, res: Response): Promise<any> => {
    const adapter = await expressAdapter(req, updateUserService());
    return res.status(adapter.statusCode).json(adapter.body);
});

userRouter.get('/:id', authMiddleware, async (req: Request, res: Response): Promise<any> => {   
    const adapter = await expressAdapter(req, getUserService());
    return res.status(adapter.statusCode).json(adapter.body);
});

userRouter.delete('/:id', authMiddleware, async (req: Request, res: Response): Promise<any> => {
    const adapter = await expressAdapter(req, deleteUserService());
    return res.status(adapter.statusCode).json(adapter.body);
});

userRouter.get('/', async (req: Request, res: Response): Promise<any> => {
    const adapter = await expressAdapter(req, loginUserService());
    return res.status(adapter.statusCode).json(adapter.body);
});

export { userRouter };