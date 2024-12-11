import { Router } from 'express'
import { getAllUsers } from '../controllers/UserController'

const router = Router()

/**
 *
 * @apiDescription that's how you get us back the users
 * @apiGroup User
 * @api {GET} /api/users/all get all users
 * @apiName getAllUsers
 *
 * @apiSampleRequest http://localhost:3000/api/users/all
 *
 */
router.get('/all', getAllUsers)

export default router
