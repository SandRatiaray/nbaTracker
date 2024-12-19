/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier of the user
 *           example: 1
 *         email:
 *           type: string
 *           description: Email address of the user
 *           example: "admin@admin.com"
 *         password:
 *           type: string
 *           description: Password of the user (plaintext for example purposes)
 *           example: "123456789"
 *         firstName:
 *           type: string
 *           description: First name of the user
 *           example: "John"
 *         lastName:
 *           type: string
 *           description: Last name of the user
 *           example: "Doe"
 *         isAdmin:
 *           type: boolean
 *           description: Indicates whether the user is an administrator
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date when the user was created
 *           example: "2024-12-19T15:30:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date when the user was last updated
 *           example: "2024-12-19T15:30:00Z"
 *         teamsFollowed:
 *           type: array
 *           items:
 *             type: integer
 *           description: List of team IDs followed by the user
 *           example: [1, 2, 45]
 *         playersFollowed:
 *           type: array
 *           items:
 *             type: integer
 *           description: List of player IDs followed by the user
 *           example: [34, 56, 56]
 *       required:
 *         - id
 *         - email
 *         - password
 *         - firstName
 *         - lastName
 *         - isAdmin
 */
export const userSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    isAdmin: { type: 'boolean' },
    createdAt: { type: 'string', format: 'date-time' },
    updatedAt: { type: 'string', format: 'date-time' },
    teamFollowed: {
      type: 'array',
      items: { type: 'integer' },
    },
    playersFollowed: {
      type: 'array',
      items: { type: 'integer' },
    },
  },
  required: ['id', 'email', 'password', 'firstName', 'lastName', 'isAdmin'],
}
