import { Request, Response } from 'express'
import { Prisma } from '@prisma/client'
import {
  deleteUser,
  getUsers,
  getUniqueUser,
  initilisedUsersAdmin,
  updateToAdmin,
  updateUser,
} from '../services/adminService'

export const getAllUsers = async (req: Request, res: Response) => {
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

export const createUserAdmin = async (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const newAdmin = await updateToAdmin(id)

    res.status(200).json(newAdmin)
  } catch (error) {
    res.status(400).json({ message: `Can't create this user` })
  }
}

export const updateOneUser = async (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const updatedUser = await updateUser(id)

    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(400).json({ message: `Can't update this user` })
  }
}

export const deleteOneUser = async (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const deletedUser = await deleteUser(id)

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
