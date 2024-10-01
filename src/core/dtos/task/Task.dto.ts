export interface ITaskDTO {
    id: string;
    taskListId: string;
    title: string;
    description: string;
    dueDate: Date;
    status: string;
    assignedTo: string;
    createdAt: Date;
    updatedAt: Date;
}