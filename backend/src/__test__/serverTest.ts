// Server for test environment

import express from 'express'
import index from '../routes'
import cors from 'cors'

const serverTest = () => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(index)
}
