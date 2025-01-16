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
