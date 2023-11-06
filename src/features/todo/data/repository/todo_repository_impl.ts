import { Todo } from "../../domain/entities/todo.js"
import { TodoRepository } from "../../domain/repository/todo_repository.js"
import { TodoDatabase } from "../database/todo_database.js"

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private readonly todoDb: TodoDatabase) {}
  list(): Promise<Todo[]> {
    return this.todoDb.list()
  }
  async create(todo: Omit<Todo, "id">): Promise<Todo> {
    return await this.todoDb.create(todo)
  }
  async update(todo: Todo): Promise<Todo> {
    return await this.todoDb.update(todo)
  }
  async delete(id: string): Promise<void> {
    await this.todoDb.delete(id)
  }
  retrieve(id: string): Promise<Todo | undefined> {
    return this.todoDb.retrieve(id)
  }
}
