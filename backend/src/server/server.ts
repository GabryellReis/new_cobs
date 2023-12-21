import express from "express"
import { routes } from "./routes"
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(port, () => console.log("SERVER RUNNING IN localhost:3001"))