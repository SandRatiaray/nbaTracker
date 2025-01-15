import bcrypt from 'bcrypt'
import prisma from '../../config/db.config'

const user = [
  {
    email: 'admin@admin.com',
    password: bcrypt.hashSync('nbaAdmin', 12),
    firstName: 'john',
    lastName: 'doe',
    isAdmin: true,
  },
  {
    email: 'jane@gmail.com',
    password: bcrypt.hashSync('janePassword', 12),
    firstName: 'jane',
    lastName: 'doe',
    isAdmin: false,
  },
]

const dataseed = async () => {
  try {
    await prisma.user.createMany({ data: user })
  } catch (error) {
    console.log(error)
  }
}

dataseed()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
