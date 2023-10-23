import { singleton } from "tsyringe"
import { User } from "../../domain/entities/user.js"
import { UserRepository } from "../../domain/repositories/user_repository.js"
@singleton()
export class UserRepositoryImpl implements UserRepository {
  create(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      resolve(user)
    })
  }
  get(id: string): Promise<User> {
    throw new Error("Method not implemented.")
  }
  update(user: Partial<User>): Promise<User> {
    throw new Error("Method not implemented.")
  }
  delete(id: string): Promise<User> {
    throw new Error("Method not implemented.")
  }
}
