import express from "express";
import routerUsers from "./router/users.route.js";

const app = express()

app.use(express.json());

app.use("/users",routerUsers)


app.listen(3001,()=>{
    console.log("rodando na porta 3000")
})