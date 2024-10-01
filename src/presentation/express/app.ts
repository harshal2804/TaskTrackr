import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectToMongo } from '../../infrastructure/database/mongoDB/connection';
import { userRouter } from './routes/user.routes';
import './environment';
import { taskRouter } from './routes/task.routes';
import { taskListRouter } from './routes/taskList.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Handling routes
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
app.use("/api/tasklist", taskListRouter);

//Database connection
connectToMongo(process.env.MONGO_URI || 'mongodb://localhost:27017/tasktrackr');

export default app;