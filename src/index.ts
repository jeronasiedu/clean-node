import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import todoRouter from "./features/todo/interface/todo_route.js"
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const port = process.env.PORT || 6000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use("/todos", todoRouter)

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI ?? "")
    console.log("Connected to MongoDB")
    app.listen(port, () => {
      console.log(`App is listening at http://localhost:${port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
