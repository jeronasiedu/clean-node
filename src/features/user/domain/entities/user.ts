export type User = {
  id: string
  name: string
  email: string
  age: number
}
export type AddUserParams = Omit<User, "id">
