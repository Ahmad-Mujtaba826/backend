import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Db connected ${connectionInstance}`);
    }
    catch (error) {
        console.log("error occurred", error);
        process.exit(1)

    }
}

export default connectDB;