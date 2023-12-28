import express from "express";
import cors from "cors";
import connectToDB from "./utils/connectToDB";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGO_URI;
const app = express();

connectToDB(MONGODB_URL);

app.use(cors());
app.use(express.json());

export default app;