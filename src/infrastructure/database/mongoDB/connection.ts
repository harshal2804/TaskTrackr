import mongoose from "mongoose";

export const connectToMongo = (MONGO_URI: string) :void => {
    mongoose.connect(MONGO_URI);
    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB");
    });
    mongoose.connection.on("error", (err) => {
        console.log("Error connecting to MongoDB", err);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("Disconnected from MongoDB");
    });
}