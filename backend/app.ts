import express from 'express'
import cors from 'cors'
import index from './src/routes'
import path from 'path'
import { limiter } from './src/middlewares/rateLimiter'

const app = express()

app.use(cors())
app.use(express.json())
app.use(limiter)

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'public')))

app.use(index)

export default app
