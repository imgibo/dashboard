import mongoose from "mongoose";

export default function connectToDB(uri) {
    mongoose.connect(uri).then((_, res) => console.log("Connected to DB!"));
};