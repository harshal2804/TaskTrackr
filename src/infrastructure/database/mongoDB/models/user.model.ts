import { Schema,model } from "mongoose";

interface User {
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
}

const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    role: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default model('User', userSchema);