import { Router } from 'express'
import adminRouter from './admin'
import homeRouter from './home'

const router = Router()
router.use('/', homeRouter)
router.use('/api/admin', adminRouter)

export default router
