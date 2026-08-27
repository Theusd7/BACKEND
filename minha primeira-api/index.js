import express from "express";

const app = express();

app.get("/livros", (req, res) => {
    res.send("hello world")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

