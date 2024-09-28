import mongoose from "mongoose";

export const connectToMongo = (MONGO_URI: string) :void => {
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB', err);
    });
}