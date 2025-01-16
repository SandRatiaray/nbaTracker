import { Request, Response } from 'express'
import { Prisma } from '@prisma/client'
import {
  deleteUser,
  getUsers,
  getUniqueUser,
  initilisedUsersAdmin,
  updateAdmin,
} from '../services/adminService'

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const users = await getUsers()

    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ message: 'this is a fucking error' })
  }
}

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const user = await getUniqueUser(id)

    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: 'No user was found' })
  }
}

export const updateUserAdmin = async (req: Request, res: Response) => {
  try {
    const email = req.body.email
    const isAdmin = req.body.isAdmin
    const newAdmin = await updateAdmin(email, isAdmin)

    res.status(200).json(newAdmin)
  } catch (error) {
    res.status(400).json({ message: `Can't create this user` })
  }
}

export const deleteOneUser = async (req: Request, res: Response) => {
  try {
    const email = req.body.email
    const deletedUser = await deleteUser(email)

    res.status(200).json(deletedUser)
  } catch (error) {
    res.status(400).json({ message: `Can't delete this user` })
  }
}

export const initialiseDataProject = async (users: Prisma.UserCreateManyInput[]) => {
  try {
    const initialiseUsers = await initilisedUsersAdmin(users)
  } catch (error) {
    console.error(`Can't create the user contact the owner of the project`)
  }
}
