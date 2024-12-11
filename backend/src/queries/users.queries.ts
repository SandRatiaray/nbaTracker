import prisma from '../config/db.config'

export const getUsers = () => {
  return [
    {
      id: 1,
      email: 'john@gmail.com',
      password: '123456789',
      name: 'john',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 2,
      email: 'jane@gmail.com',
      password: '123456789',
      name: 'jane',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 3,
      email: 'michel@gmail.com',
      password: '123456789',
      name: 'michel',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: 4,
      email: 'youssef@gmail.com',
      password: '123456789',
      name: 'youssef',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ]
}
