import express from "express"
import { container } from "tsyringe"
import { UserController } from "./user_controller.js"

const userRoutes = express.Router()
const userController = container.resolve(UserController)
userRoutes.post("/", userController.createUser)
userRoutes.get("/:id", userController.getUser)

export default userRoutes
