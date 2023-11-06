import { Todo } from "../../domain/entities/todo.js"
import todoModel from "../models/todo.js"

export interface TodoDatabase {
  create(todo: Omit<Todo, "id">): Promise<Todo>
  update(todo: Todo): Promise<Todo | undefined>
  delete(id: string): Promise<void>
  retrieve(id: string): Promise<Todo | undefined>
  list(): Promise<Todo[]>
}

export class TodoDatabaseImpl implements TodoDatabase {
  async list(): Promise<Todo[]> {
    return await todoModel.find({})
  }
  async retrieve(id: string): Promise<Todo | undefined> {
    const results = await todoModel.findById(id)
    return results?.toJSON()
  }
  async create(todo: Omit<Todo, "id">): Promise<Todo> {
    const results = await todoModel.create(todo)
    return results.toJSON()
  }
  async update(todo: Todo): Promise<Todo | undefined> {
    const results = await todoModel.findByIdAndUpdate(todo.id, todo)
    return results?.toJSON()
  }
  async delete(id: string): Promise<void> {
    await todoModel.findByIdAndDelete(id)
  }
}
