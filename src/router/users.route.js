import { Router } from "express";
import BooksController from "../controllers/booksControllers/index.js";
import usersController from "../controllers/usersControllers/index.js";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware.js";
import verifyEmailUser from "../middlewares/verifyEmailUser.middleware.js";

const routerUsers = Router()

const bookController = new BooksController()
const userController = new usersController()

routerUsers.get("",userController.index)
routerUsers.post("",verifyEmailUser, userController.store)
routerUsers.put("/:id",userController.update)
routerUsers.delete("/:id",userController.delete)

routerUsers.post("/login", userController.userLoginController)

routerUsers.post("/books",verifyAuthToken , bookController.store)
routerUsers.get("/books",verifyAuthToken,bookController.index)
routerUsers.put("/books/:id",verifyAuthToken,bookController.update)
routerUsers.delete("/books/:id" , verifyAuthToken, bookController.delete)

export default routerUsers