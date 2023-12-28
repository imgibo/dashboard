import app from './app.js';

const PORT = process.env.PORT || 3001;

app.get("/", (_, res) => res.send("<h1>Welcome to Gibs Capital</h1>"));

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});