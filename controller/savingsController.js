import Savings from "../models/Savings";

async function getSaver(req, res) {
    const id = req.params.id;
    const saver = await Savings.findById(id);

    return res.json(saver);
}

async function getSavers(req, res) {
    const savers = await Savings.find({});
    return res.json(savers);
}

async function saversCount(_, res) {
    const savers = await Savings.find({});
    const count = await savers.length;

    return res.send(`${count}`);
}

async function getSavingsTotal(_, res) {
    let totalAmount = await savings.reduce((accumulator, current) => {
        return accumulator + current.amount;
    }, 0);

    return res.send(`${totalAmount}`);
}

async function deleteSaver(req, res) {
    const id = req.params.id;
    await Savings.findByIdAndDelete(id);

    return res.status(204).end();
}

async function createSaver(req, res) {
    const body = req.body;

    if (!body.name) {
        return res.status(400).json({error: "content missing"})
    }

    const saver = new Savings({
        name: body.String,
        amount: body.Number || 0
    });

    const savedSaver = await saver.save().then(result => result);

    return res.status(201).json(savedSaver);
}

async function updateSaver(req, res) {
    const id = req.params.id;
    const { name, amount} = req.body;

    const updatedSaver = {
        name,
        amount
    };
    
    const returnedSaver = await Savings.findByIdAndUpdate(id, updatedSaver, {new: true});

    return res.status(200).json(returnedSaver);
}

export default {
    getSaver,
    getSavers,
    saversCount,
    getSavingsTotal,
    deleteSaver,
    createSaver,
    updateSaver
}