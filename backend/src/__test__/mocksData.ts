import prisma from '../../config/db.config'

export const mocksUsers = [
  {
    id: 1,
    email: 'admin@admin.com',
    password: '123456789',
    firstName: 'john',
    lastName: 'doe',
    isAdmin: true,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    teamsFollowed: [],
    playersFollowed: [],
  },
  {
    id: 2,
    email: 'jane@gmail.com',
    password: '123456789',
    firstName: 'jane',
    lastName: 'doe',
    isAdmin: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    teamsFollowed: [],
    playersFollowed: [],
  },
]
