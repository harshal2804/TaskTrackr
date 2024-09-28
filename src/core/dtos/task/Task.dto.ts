export interface ITaskDTO {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    status: string;
    assignedTo: string;
    assignedBy: string;
}