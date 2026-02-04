import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUri = process.env.MONGO_URI

const dbConnect = async () => {
    try {
        await mongoose.connect(dbUri)
        console.log("Database connected...");
    } catch (error) {
        console.error("Database Connection error",error)
        process.exit(1);
    }
}

dbConnect();