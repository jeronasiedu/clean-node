import { TodoDatabaseImpl } from "./data/database/todo_database.js"
import { TodoRepositoryImpl } from "./data/repository/todo_repository_impl.js"
import { TodoUseCase } from "./domain/usecase/todo_usecase.js"

const todoRepository = new TodoRepositoryImpl(new TodoDatabaseImpl())
export const todoUseCase = new TodoUseCase(todoRepository)
