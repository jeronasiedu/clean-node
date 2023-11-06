import { Request, Response } from "express"
import { todoUseCase } from "../../di_container.js"
export async function retrieveTodo(req: Request, res: Response) {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({
        error: "Todo Id is required",
      })
    }
    const todo = await todoUseCase.retrieve(id)
    if (!todo) {
      return res.status(204).end()
    }
    res.json({
      data: todo,
    })
  } catch (error) {
    res.status(500).json({
      error,
    })
  }
}
