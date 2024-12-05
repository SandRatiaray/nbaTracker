import * as dotenv from 'dotenv'

dotenv.config()

module.exports = {
  dbUrl: process.env.DATABASE_URL,
  portHTTP: 3000,
}
