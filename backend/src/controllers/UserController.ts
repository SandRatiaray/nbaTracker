import { Request, Response } from 'express'
import { getUsers } from '../services/users.queries'

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
  } catch (error) {
    res.status(400).json({ message: 'No user was found' })
  }
}
