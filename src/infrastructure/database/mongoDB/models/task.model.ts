import { Schema, Types, model } from "mongoose";

export interface Task {
    taskListId: Types.ObjectId;
    title: string;
    description: string;
    dueDate: Date;
    status: string;
    assignedTo: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema = new Schema<Task>({
    taskListId: {
        type: Schema.Types.ObjectId,
        ref: 'TaskList',
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Task', taskSchema);