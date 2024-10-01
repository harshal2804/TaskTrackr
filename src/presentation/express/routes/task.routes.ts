import { Router } from "express";
import { expressAdapter } from "../../adapters/express";
import { createTaskService } from "../../../infrastructure/services/Task/createTask.service";
import { updateTaskService } from "../../../infrastructure/services/Task/updateTask.service";
import { getTaskService } from "../../../infrastructure/services/Task/getTask.service";
import { deleteTaskService } from "../../../infrastructure/services/Task/deleteTask.service";
import { authMiddleware } from "../middlewares/auth.middleware";

const taskRouter = Router();

taskRouter.post('/', authMiddleware, async (req, res): Promise<any> => {
    const adapter = await expressAdapter(req, createTaskService());
    return res.status(adapter.statusCode).json(adapter.body);
});

taskRouter.patch('/:id', authMiddleware, async (req, res): Promise<any> => {
    const adapter = await expressAdapter(req, updateTaskService());
    return res.status(adapter.statusCode).json(adapter.body);
});

taskRouter.get('/:id', authMiddleware, async (req, res): Promise<any> => {
    const adapter = await expressAdapter(req, getTaskService());
    return res.status(adapter.statusCode).json(adapter.body);
});

taskRouter.delete('/:id', authMiddleware, async (req, res): Promise<any> => {
    const adapter = await expressAdapter(req, deleteTaskService());
    return res.status(adapter.statusCode).json(adapter.body);
});

export { taskRouter };