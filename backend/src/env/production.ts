import * as dotenv from 'dotenv'

dotenv.config()

export default {
  dbUrl: process.env.DATABASE_URL,
  portHTTP: 4000,
}
