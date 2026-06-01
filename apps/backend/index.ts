import express from "express";
import { client } from "@repo/db/client"

const app = express();

app.use(express.json());

app.get("/todos", async (req, res) => {
    res.send("hi there");
})

app.post("/todos", async (req, res) => {
    const { content } = req.body;

    await client.todos.create({
        data: {
            content: content,
            isDone: false
        }
    })

    res.json({
        msg: "Todo added successfully"
    })
})

app.listen(3001, () => {
    console.log("backend started on port 3001")
})