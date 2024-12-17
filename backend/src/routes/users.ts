import { Router } from 'express'
import { getAllUsers } from '../controllers/UserController'

const router = Router()

/**
 * @swagger
 * /users/all:
 *   get:
 *     description: retrieve all users
 *     responses:
 *       200:
 *         description: Returns a a list of users
 */
router.get('/all', getAllUsers)

export default router
