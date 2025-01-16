import prisma from '../../config/db.config'
import { Prisma } from '@prisma/client'

export const getUsers = async () => {
  return prisma.user.findMany()
}

export const getUniqueUser = (email: string) => {
  console.log(email)

  return prisma.user.findUnique({ where: { email: email } })
}

export const updateAdmin = (email: string, isAdmin: boolean) => {
  console.log(email)

  return prisma.user.update({ where: { email: email }, data: { isAdmin: isAdmin } })
}

export const deleteUser = (email: string) => {
  console.log(email)

  return prisma.user.delete({ where: { email: email } })
}

export const initilisedUsersAdmin = (users: Prisma.UserCreateManyInput[]) => {
  return prisma.user.createMany({ data: users })
}
