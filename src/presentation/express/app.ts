import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from './routes/auth.routes';
import { connectToMongo } from '../../infrastructure/database/mongoDB/connection';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Handling routes
app.use("/api/auth", authRouter);

//Database connection
connectToMongo(process.env.MONGO_URI || 'mongodb://localhost:27017/tasktrackr');

export default app;