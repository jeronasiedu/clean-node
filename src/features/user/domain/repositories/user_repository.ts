import { AddUserParams, User } from "../entities/user.js"

export interface UserRepository {
  create(user: AddUserParams): Promise<User>
  get(id: string): Promise<User>
  update(user: Partial<User>): Promise<User>
  delete(id: string): Promise<User>
}
