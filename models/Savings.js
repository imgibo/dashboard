import mongoose from "mongoose";

const savingsSchema = mongoose.Schema({
    name: String,
    amount: Number,
});

savingsSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Savings = mongoose.model("Savings", savingsSchema);

export default Savings;