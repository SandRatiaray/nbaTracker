import homeRouter from './home'
import { Router } from 'express'

const router = Router()

router.get('/', homeRouter)

export default router
