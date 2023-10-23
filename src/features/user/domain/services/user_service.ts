import { container, inject, singleton } from "tsyringe"
import { UserRepositoryImpl } from "../../data/repositories/user_repository_impl.js"
import { AddUserParams, User } from "../entities/user.js"
import { UserRepository } from "../repositories/user_repository.js"

container.register("UserRepository", {
  useValue: UserRepositoryImpl,
})

@singleton()
export class UserService {
  constructor(@inject("UserRepository") private readonly userRepository: UserRepository) {}
  async create(user: AddUserParams): Promise<User> {
    return this.userRepository.create(user)
  }
  async get(id: string): Promise<User> {
    return this.userRepository.get(id)
  }
  async update(user: Partial<User>): Promise<User> {
    return this.userRepository.update(user)
  }
  async delete(id: string): Promise<User> {
    return this.userRepository.delete(id)
  }
}
