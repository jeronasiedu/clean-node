import { Request, Response } from "express"
import { todoUseCase } from "../../di_container.js"
export async function listTodos(req: Request, res: Response) {
  try {
    const todos = await todoUseCase.list()
    res.json({
      data: todos,
    })
  } catch (error) {
    res.status(500).json(error)
  }
}
