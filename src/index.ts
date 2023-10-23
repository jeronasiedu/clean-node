import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import "reflect-metadata"
import userRoutes from "./features/user/presentation/user_routes.js"
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(cors())
const port = process.env.PORT || 4000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use("/users", userRoutes)

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/clean-node")
    console.log("Connected to MongoDB")
    app.listen(port, () => {
      console.log(`App is listening at http://localhost:${port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
