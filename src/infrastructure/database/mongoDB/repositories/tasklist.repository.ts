import { ITaskListRepository } from "../../../../application/repositiories/tasklist.repository";
import { ITaskListDTO } from "../../../../core/dtos/tasklist/TaskList.dto";
import { ICreateTaskListDTO } from "../../../../core/dtos/tasklist/TaskListCreate.dto";
import taskModel from "../models/task.model";
import tasklistModel from "../models/tasklist.model";

export class taskListRepositoryMongoDB implements ITaskListRepository {
    async create(data: ICreateTaskListDTO): Promise<ITaskListDTO> {
        const taskList = await tasklistModel.create({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        const taskListOut: ITaskListDTO = {
            id: taskList.id,
            title: taskList.title,
            description: taskList.description,
            owner: (taskList.owner as unknown as string),
            tasks: taskList.tasks,
            createdAt: taskList.createdAt,
            updatedAt: taskList.updatedAt
        };
        return taskListOut;
    }
    async update(id: string, data: ICreateTaskListDTO): Promise<ITaskListDTO | unknown> {
        const taskList = await tasklistModel.findByIdAndUpdate(id, {
            ...data,
            updatedAt: new Date()
        });
        if(!taskList) return null;

        const taskListOut: ITaskListDTO = {
            id: taskList.id,
            title: taskList.title,
            description: taskList.description,
            owner: (taskList.owner as unknown as string),
            tasks: taskList.tasks,
            createdAt: taskList.createdAt,
            updatedAt: taskList.updatedAt
        };
        return taskListOut;
    }
    async delete(id: string): Promise<boolean> {
        const taskList = await tasklistModel.findByIdAndDelete(id);
        if(!taskList) return false;
        taskList.tasks.forEach(async (task) => {
            await taskModel.findByIdAndDelete(task);
        })
        return true;
    }
    async findById(id: string): Promise<ITaskListDTO | unknown> {
        const taskList = await tasklistModel.findById(id);
        if(!taskList) return null;
        const taskListOut: ITaskListDTO = {
            id: taskList.id,
            title: taskList.title,
            description: taskList.description,
            owner: (taskList.owner as unknown as string),
            tasks: taskList.tasks,
            createdAt: taskList.createdAt,
            updatedAt: taskList.updatedAt
        };
        return taskListOut;
    }

    async findByIdWithoutTask(id: string): Promise<ITaskListDTO | unknown> {
        const taskList = await tasklistModel.findById(id);
        if(!taskList) return null;
        const taskListOut: ITaskListDTO = {
            id: taskList.id,
            title: taskList.title,
            description: taskList.description,
            owner: (taskList.owner as unknown as string),
            tasks: [],
            createdAt: taskList.createdAt,
            updatedAt: taskList.updatedAt
        };
        return taskListOut;
    }

    async findMany(): Promise<ITaskListDTO[]> {
        const taskLists = await tasklistModel.find();
        const taskListsOut: ITaskListDTO[] = taskLists.map(taskList => {
            return {
                id: taskList.id,
                title: taskList.title,
                description: taskList.description,
                owner: (taskList.owner as unknown as string),
                tasks: taskList.tasks,
                createdAt: taskList.createdAt,
                updatedAt: taskList.updatedAt
            }
        });
        return taskListsOut;
    }
    async findByOwner(userId: string): Promise<ITaskListDTO[]> {
        const taskLists = await tasklistModel.find({ owner: userId });
        const taskListsOut: ITaskListDTO[] = taskLists.map(taskList => {
            return {
                id: taskList.id,
                title: taskList.title,
                description: taskList.description,
                owner: (taskList.owner as unknown as string),
                tasks: taskList.tasks,
                createdAt: taskList.createdAt,
                updatedAt: taskList.updatedAt
            }
        });
        return taskListsOut;
    }
}