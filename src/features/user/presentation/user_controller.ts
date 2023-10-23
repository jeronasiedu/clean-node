import { Request, Response } from "express"

import { autoInjectable } from "tsyringe"
import { z } from "zod"
import { AddUserParams } from "../domain/entities/user.js"
import { UserService } from "../domain/services/user_service.js"
@autoInjectable()
export class UserController {
  constructor(private readonly userService: UserService) {}
  async createUser(req: Request, res: Response) {
    const userSchema = z.object({
      name: z.string().trim().min(3, { message: "Name must be at least 3 characters" }),
      email: z.string().email(),
      age: z.number().positive().gte(12, { message: "Age must be at least 12" }),
    })
    const validation = userSchema.safeParse(req.body)
    if (!validation.success) {
      return res.status(400).json(validation.error.flatten())
    }

    const user: AddUserParams = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
    try {
      const createdUser = await this.userService.create(user)
      return res.status(201).json(createdUser)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }
  async getUser(req: Request, res: Response) {
    const { id } = req.params
    const idSchema = z.string()
    try {
      if (!idSchema.safeParse(id).success) {
        return res.status(400).json({ message: "Invalid id" })
      }
      const user = await this.userService.get(id)
      return res.status(200).json(user)
    } catch (error) {
      return res.sendStatus(500)
    }
  }
}
