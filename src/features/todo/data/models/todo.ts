import { Schema, model } from "mongoose"
import { Todo } from "../../domain/entities/todo.js"

const todoSchema = new Schema<Todo>(
  {
    completed: {
      default: false,
      type: "boolean",
    },
    title: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform(doc, ret, options) {
        ret.id = doc._id
        delete ret._id
      },
    },
  }
)

const todoModel = model<Todo>("todo", todoSchema)
export default todoModel
