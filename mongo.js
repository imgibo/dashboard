import mongoose from "mongoose";

// ORM = Object Relational Mapper

const MONGODB_URL = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URL);

const savingsSchema = mongoose.Schema({
    name: String,
    amount: Number,
});

const Savings = mongoose.model("Savings", savingsSchema);

// Saving data to database
const amount1 = new Savings({
    name: "Skippy Girl",
    amount: 300,
});

amount1.save().then(result => {
    console.log(result);
    console.log("Savings received!");
    mongoose.connection.close();
});

// Fetching data from the database
Savings.find({}).then((result) => {
    result.forEach((amount) => {
        console.log(amount);
    })
    mongoose.connection.close();
})

// Fetching data from the database with filter
Savings.find({ amount: 300 }).then((result) => {
    result.forEach((amount) => {
        console.log(amount);
    })
    mongoose.connection.close();
})

// Fetching specific data from the database
Savings.findById("658cef54315815ac0c209a46").then((result) => {
    console.log(result);
    mongoose.connection.close();
})

// Fetch data and delete from the database
Savings.findByIdAndDelete("658cef54315815ac0c209a46").then((result) => {
    console.log("Savings is deleted!");
    mongoose.connection.close();
})

// Fetch data and update from the database
const savingsUpdate = {
    name: "Almond",
    amount: 500
};
Savings.findByIdAndUpdate("658cf1faec510e979d2a5341", savingsUpdate, {new: true}).then((result) => {
    console.log(result);
    console.log("Savings has been updated");
    mongoose.connection.close();
})