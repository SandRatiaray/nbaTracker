import { Router } from 'express'
import userRouter from './users'
import homeRouter from './home'

const router = Router()
router.use('/', homeRouter)
router.use('/api/users', userRouter)

export default router
