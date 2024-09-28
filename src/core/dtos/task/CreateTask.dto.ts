export interface ICreateTaskDTO {
    title: string;
    description: string;
    dueDate: Date;
    assignedTo: string;
    assignedBy: string;
}