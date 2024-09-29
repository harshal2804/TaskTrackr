import { Router } from "express";
import { expressAdapter } from "../../adapters/express";
import { createTaskService } from "../../../infrastructure/services/Task/createTask.service";

const taskRouter = Router();

taskRouter.post('/', async (req, res): Promise<any> => {
    const adapter = await expressAdapter(req, createTaskService());
    return res.status(adapter.statusCode).json(adapter.body);
});

export { taskRouter };