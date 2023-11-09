import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = ()=>{

    try {

        const mongoURL = process.env.MONGOCONNECTSTRING;
        console.log(mongoURL);
        const connection = mongoose.connect(mongoURL)
        console.log("MongoDB connected");
        return connection
    } catch (error) {
        console.log(error);
    }


}

export default connectDB;
