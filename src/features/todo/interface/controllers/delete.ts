import { Request, Response } from "express"
import { todoUseCase } from "../../di_container.js"
export async function deleteTodo(req: Request, res: Response) {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({
        error: "Todo Id is required",
      })
    }
    await todoUseCase.delete(id)
    res.status(204).end()
  } catch (error) {
    res.status(500).json({
      error,
    })
  }
}
