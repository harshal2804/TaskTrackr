export interface IUpdateTaskDTO {
    id?: string;
    taskListId?: string;
    title?: string;
    description?: string;
    dueDate?: Date;
    status?: string;
    assignedTo?: string;
}