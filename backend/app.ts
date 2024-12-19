import express, { Application } from 'express'
import cors from 'cors'
import index from './src/routes'
import path from 'path'
import { limiter } from './src/middlewares/rateLimiter'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './config/swagger'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(limiter)

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.use(index)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
export default app
