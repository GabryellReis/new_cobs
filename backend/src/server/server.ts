import express from "express"
import { routes } from "./routes"
import cors from 'cors'

const app = express()
const port = 3001

const corsOption = {
  origin: ['http://localhost:8081', 'http://127.0.0.1:8081'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)


app.listen(port, () => console.log("SERVER RUNNING IN localhost:3001"))