import { Router } from "express"
import { createTodo } from "./controllers/create.js"
import { deleteTodo } from "./controllers/delete.js"
import { listTodos } from "./controllers/list.js"
import { retrieveTodo } from "./controllers/retrieve.js"
import { updateTodo } from "./controllers/update.js"

const todoRouter = Router()

todoRouter.post("/", createTodo)
todoRouter.get("/", listTodos)
todoRouter.patch("/:id([0-9a-f]{24})", updateTodo)
todoRouter.delete("/:id([0-9a-f]{24})", deleteTodo)
todoRouter.get("/:id([0-9a-f]{24})", retrieveTodo)

export default todoRouter
