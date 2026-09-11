// basically issue with mongoBD connection was my college wifi was blocking the connection to the mongoDB server. I tried connecting to the same mongoDB server from my home wifi and it worked perfectly fine. So, if you are facing the same issue, try connecting to a different network and see if it works.
import mongoose from "mongoose";
export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        });
        console.log("MongoDB connected successfully!");

    } catch(error){
        console.error("Error connecting to MONGODB", error);
        process.exit(1); // Exit the process with an error code
    }
}