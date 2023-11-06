import { Todo } from "../entities/todo.js"
import { TodoRepository } from "../repository/todo_repository.js"

export class TodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async retrieve(id: string): Promise<Todo | undefined> {
    return this.todoRepository.retrieve(id)
  }
  async list(): Promise<Todo[]> {
    return this.todoRepository.list()
  }
  async create(todo: Omit<Todo, "id">): Promise<Todo> {
    return await this.todoRepository.create(todo)
  }
  async update(todo: Todo): Promise<Todo> {
    return this.todoRepository.update(todo)
  }
  async delete(id: string): Promise<void> {
    return this.todoRepository.delete(id)
  }
}
