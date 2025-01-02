import { log } from 'console'
import prisma from '../../config/db.config'
import { Prisma } from '@prisma/client'

export const getUsers = () => {
  return [
    {
      id: 1,
      email: 'admin@admin.com',
      password: '123456789',
      firstName: 'john',
      lastName: 'doe',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
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
      createdAt: new Date(),
      updatedAt: new Date(),
      teamsFollowed: [],
      playersFollowed: [],
    },
  ]
}

export const getUniqueUser = (id: string) => {
  console.log(id)

  return {
    id: 2,
    email: 'jane@gmail.com',
    password: '123456789',
    firstName: 'jane',
    lastName: 'doe',
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    teamsFollowed: [],
    playersFollowed: [],
  }
}

export const updateToAdmin = (id: string) => {
  console.log(id)

  return {
    id: 2,
    email: 'jane@gmail.com',
    password: '123456789',
    firstName: 'jane',
    lastName: 'doe',
    isAdmin: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    teamsFollowed: [],
    playersFollowed: [],
  }
}

export const updateUser = (id: string) => {
  console.log(id)

  return {
    id: 2,
    email: 'jane@gmail.com',
    password: '123456789',
    firstName: 'jane',
    lastName: 'doe',
    isAdmin: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    teamsFollowed: [],
    playersFollowed: [],
  }
}

export const deleteUser = (id: string) => {
  console.log(id)

  return {
    id: 2,
    email: 'jane@gmail.com',
  }
}

export const initilisedUsersAdmin = (users: Prisma.UserCreateManyInput[]) => {
  return prisma.user.createMany({ data: users })
}
