import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Test Page</h2>');
});

app.get("/admin", (req, res) => {
    res.send("admin tests");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on ${port}`))