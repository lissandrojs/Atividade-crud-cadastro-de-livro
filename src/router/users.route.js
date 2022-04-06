import { Router } from "express";
import usersController from "../controllers/usersControllers/index.js";

const routerUsers = Router()

const userController = new usersController()

routerUsers.get("",userController.index)
routerUsers.post("", userController.store)

export default routerUsers