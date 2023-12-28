import express, { Response } from "express"
import { routes } from "./routes"
import cors from 'cors'
import https from 'https'
import fs from 'fs'

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

app.get('/', (req, res) => {
    res.send("Hello, World!!")
})

https.createServer({
  cert: fs.readFileSync('src/server/ssl/server.crt'),
  key: fs.readFileSync('src/server/ssl/server.key')
}, app).listen(3333, () => console.log("RODANDO NO HTTPS"))

app.listen(port, () => console.log("SERVER RUNNING IN localhost:3001"))