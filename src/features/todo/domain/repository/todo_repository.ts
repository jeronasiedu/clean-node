import { Todo } from "../entities/todo.js"

export interface TodoRepository {
  create(todo: Omit<Todo, "id">): Promise<Todo>
  update(todo: Todo): Promise<Todo>
  delete(id: string): Promise<void>
  retrieve(id: string): Promise<Todo | undefined>
  list(): Promise<Todo[]>
}
