import express from "express";
import routerBooks from "./router/books.route.js";
import routerUsers from "./router/users.route.js";

const app = express()

app.use(express.json());

app.use("/users",routerUsers)


app.listen(3000,()=>{
    console.log("rodando na porta 3000")
})