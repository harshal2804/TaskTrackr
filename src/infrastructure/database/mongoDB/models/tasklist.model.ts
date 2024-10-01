import { model, Schema, Types } from "mongoose";
import { ITaskDTO } from "../../../../core/dtos/task/Task.dto";

interface TaskList {
    title: string;
    description: string;
    owner: Types.ObjectId;
    tasks: ITaskDTO[];
    createdAt: Date;
    updatedAt: Date;
}

const taskListSchema = new Schema<TaskList>({
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
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default model('TaskList', taskListSchema);