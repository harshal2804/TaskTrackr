import { Router } from "express";
import { createTaskListService } from "../../../infrastructure/services/TaskList/createTaskList.service";
import { expressAdapter } from "../../adapters/express";
import { authMiddleware } from "../middlewares/auth.middleware";

const taskListRouter = Router();

taskListRouter.post('/', authMiddleware, async (req, res): Promise<any> => {
    const adapter = await expressAdapter(req, createTaskListService());
    return res.status(adapter.statusCode).json(adapter.body);
});

export { taskListRouter };