import express from 'express'
import cors from 'cors'
import index from './src/routes'
import path from 'path'

const app = express()

app.use(cors())
app.use(express.json())

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//   res.send({ status: 200, body: 'Hello World' })
// })

app.use(index)

export default app
