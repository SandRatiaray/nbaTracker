import { Router } from 'express'
import { deleteOneUser, getAllUsers } from '../controllers/AdminController'

const router = Router()

/**
 * @swagger
 * /api/admin/all:
 *   get:
 *     summary: Retrieve all users
 *     description: This route allows you to retrieve all registered users with their details.
 *     tags:
 *       - admin
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
/**
 * @swagger
 * /api/admin/delete:
 *   get:
 *     summary: Delete a user
 *     description: This route allows you to remove a user.
 *     tags:
 *       - admin
 *     responses:
 *       200:
 *         description: Successfully remove the following user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error.
 */
router.delete('/delete', deleteOneUser)

export default router
