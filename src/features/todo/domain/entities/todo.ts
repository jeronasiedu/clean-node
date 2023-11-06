import { z } from "zod"
export interface Todo {
  id: string
  title: string
  completed: boolean
}
export const zTodo = z.object({
  id: z.string(),
  title: z.string().trim(),
  completed: z.boolean(),
})
