import { expect, test } from '@jest/globals'
import * as data from '../mocksData'

test(' it should get the right type for admin user', () => {
  const userAdmin = data.mocksUsers[0]
  expect(userAdmin.email).toMatch(
    /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/,
  )
  expect(userAdmin.isAdmin).toBe(true)
  expect(typeof userAdmin.firstName).toBe('string')
  expect(typeof userAdmin.lastName).toBe('string')
  expect(typeof userAdmin.password).toBe('string')
})
