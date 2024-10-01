import { ITaskRepository } from "../../../../application/repositiories/task.repository";
import { ICreateTaskDTO } from "../../../../core/dtos/task/CreateTask.dto";
import { ITaskDTO } from "../../../../core/dtos/task/Task.dto";
import { IUpdateTaskDTO } from "../../../../core/dtos/task/UpdateTask.dto";
import taskModel from "../models/task.model";
import tasklistModel from "../models/tasklist.model";

export class taskRepositoryMongoDB implements ITaskRepository {
    async create(data: ICreateTaskDTO): Promise<ITaskDTO | unknown> {
        const task = await taskModel.create({
            ...data,
            createdAt: new Date(),
        });

        const taskList = await tasklistModel.findById(task.taskListId);
        if(!taskList) return null;
        taskList.tasks.push(task.id);
        await taskList.save();
        
        const taskOut: ITaskDTO = {
            id: task.id,
            taskListId: (task.taskListId as unknown as string),
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            status: task.status,
            assignedTo: (task.assignedTo as unknown as string),
            createdAt: task.createdAt,
            updatedAt: task.updatedAt
        }
        return taskOut;
    }
    async update(id:string, data: IUpdateTaskDTO): Promise<ITaskDTO | null> {
        const task = await taskModel.findByIdAndUpdate(id, {
            ...data,
            updatedAt: new Date()
        });
        if(!task) return null;
        const taskOut: ITaskDTO = {
            id: task.id,
            taskListId: (task.taskListId as unknown as string),
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            status: task.status,
            assignedTo: (task.assignedTo as unknown as string),
            createdAt: task.createdAt,
            updatedAt: task.updatedAt
        }
        return taskOut;
    }
    async delete(id: string): Promise<boolean> {
        const task = await taskModel.findByIdAndDelete(id);
        if(!task) return false;

        const taskList = await tasklistModel.findById(task.taskListId);
        if(!taskList) return false;
        taskList.tasks = taskList.tasks.filter(taskId => taskId !== task.id);
        await taskList.save();

        return true;
    }
    async findById(id: string): Promise<ITaskDTO | unknown> {
        const task = await taskModel.findById(id);
        if(!task) return null;
        const taskOut: ITaskDTO = {
            id: task.id,
            taskListId: (task.taskListId as unknown as string),
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            status: task.status,
            assignedTo: (task.assignedTo as unknown as string),
            createdAt: task.createdAt,
            updatedAt: task.updatedAt
        }
        return taskOut;
    }
    async findMany(): Promise<ITaskDTO[]> {
        const tasks = await taskModel.find();
        const tasksOut: ITaskDTO[] = tasks.map(task => ({
            id: task.id,
            taskListId: (task.taskListId as unknown as string),
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            status: task.status,
            assignedTo: (task.assignedTo as unknown as string),
            createdAt: task.createdAt,
            updatedAt: task.updatedAt
        }));
        return tasksOut;
    }
    async findByAssignedTo(userId: string): Promise<ITaskDTO[]> {
        const tasks = await taskModel.find({ assignedTo: userId});
        const tasksOut: ITaskDTO[] = tasks.map(task => ({
            id: task.id,
            taskListId: (task.taskListId as unknown as string),
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            status: task.status,
            assignedTo: (task.assignedTo as unknown as string),
            createdAt: task.createdAt,
            updatedAt: task.updatedAt
        }));
        return tasksOut;
    }
}