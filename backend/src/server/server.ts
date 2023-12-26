import express from "express"
import { routes } from "./routes"
import cors from 'cors'

const app = express()
const port = 3001

const corsOption = {
  origin: '*',
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)


app.listen(port, '192.168.168.',  () => console.log("SERVER RUNNING IN localhost:3001"))