import app from '../app'
import http from 'http'
import conf from '../src/env'

const env = conf[process.env.NODE_ENV as 'development' | 'production']

app.set('port', env.portHTTP)
const server = http.createServer(app)


server.listen(env.portHTTP)
