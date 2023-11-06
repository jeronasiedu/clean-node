import { Request, Response } from "express"
import { todoUseCase } from "../../di_container.js"
import { Todo, zTodo } from "../../domain/entities/todo.js"

export async function createTodo(req: Request, res: Response) {
  try {
    const body = req.body
    const validation = zTodo
      .partial({
        id: true,
      })
      .safeParse(body)
    if (!validation.success) {
      return res.status(400).json(validation.error.flatten())
    }
    const todo = await todoUseCase.create(body as Omit<Todo, "id">)
    return res.json({
      data: todo,
    })
  } catch (error) {
    res.status(500).json({
      error,
    })
  }
}
