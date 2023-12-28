import express from "express";
import cors from "cors";
import savingsRouter from "./routes/savingsRouter.js";
import connectToDB from "./utils/connectToDB.js";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const app = express();

connectToDB(MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use("/savings", savingsRouter);

export default app;