import { Request, Response } from 'express'
import { updateUser } from '../services/userService'

export const updateOneUser = async (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const updatedUser = await updateUser(id)

    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(400).json({ message: `Can't update this user` })
  }
}
