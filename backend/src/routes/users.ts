import { Router } from 'express'
import { getAllUsers } from '../controllers/UserController'

const router = Router()

/**
 * @swagger
 * /api/users/all:
 *   get:
 *     summary: Retrieve  users
 *     description: This route allows you to retrieve all registered users with their details.
 *     tags:
 *       - user
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error.
 */
router.get('/all', getAllUsers)

export default router
