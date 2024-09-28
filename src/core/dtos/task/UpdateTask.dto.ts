export interface IUpdateTaskDTO {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    status: string;
    assignedTo: string;
    assignedBy: string;
}