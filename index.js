import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

let savers = [
    {
        id: 1,
        name: "Gilbert Burgos",
        amount: 200,
    },
    {
        id: 2,
        name: "Donna Dionicio",
        amount: 300,
    },
    {
        id: 3,
        name: "Peanut Butter",
        amount: 500,
    },
    {
        id: 4,
        name: "Skippy Girl",
        amount: 350,
    },
];

function generateId() {
    const maxId = savings.length > 0 ? Math.max(...savings.map((n) => n.id)) : 0;
    return maxId + 1;
};

app.get("/savings/info", (req, res) => {
    let totalAmount = savings.reduce((accumulator, current) => {
        return accumulator + current.amount;
    }, 0);

    res.send(`${totalAmount}`);
});

app.get("/", (req, res) => {
    res.send("<h1>Prime Capital Investment Group</h1>");
});

app.get("/savings", (req, res) => {
    res.json(savers);
});

app.get("/savings/:id", (req, res) => {
    const id = Number(req.params.id);
    const amount = savings.find((amount) => amount.id === id);

    res.json(amount);
});

app.post("/savings", (req, res) => {
    const body = req.body;

    if (!body.name, !body.amount) {
        return res.status(400).json({error: "content missing"});
    };

    const amount = {
        name: body.name,
        amount: body.amount,
        id: generateId()
    };

    savings = savings.concat(amount);

    res.status(201).json(amount);
});

app.delete("/savings/:id", (req, res) => {
    const id = Number(req.params.id);
    savings = savings.filter((amount) => amount.id !== id);

    res.status(204).end();
});


app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});