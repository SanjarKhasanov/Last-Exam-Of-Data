import express from 'express'
import cors from 'cors'
import { engine } from 'express-handlebars'
import router from './routes'

const server = express()

server.use(express.static('public'))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.engine('.hbs', engine({ extname: ".hbs" }))
server.set('view engine', '.hbs')

server.use(router)

server.listen(8080, () => console.log("Server is running on port 8080"))