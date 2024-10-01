export interface ICreateTaskDTO {
    taskListId: string;
    title: string;
    description: string;
    dueDate: Date;
    assignedTo: string;
}