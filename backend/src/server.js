// const express = require("express");
import express from "express"; // if we want to use this add "type": "module" in package.json
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
}));
//middleware - used for rate limiting
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
})


//shygTJLirlk5IvNL

//mongodb+srv://ryomensukuna24k_db_user:shygTJLirlk5IvNL@cluster0.bxybqph.mongodb.net/?appName=Cluster0