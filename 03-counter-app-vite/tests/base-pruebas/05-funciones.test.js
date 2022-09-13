import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

  test('GetUser debe de retornar un objeto', () => {

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect(testUser).toEqual(user)
  })


  test('getUsuarioActivo debe retornar un objeto', () => {

    const user = 'Fernando'

    const usuarioActivo = getUsuarioActivo(user)

    expect(user).toBe(usuarioActivo.username)
    expect(usuarioActivo).toStrictEqual({
      uid:'ABC567',
      username: user
    })

  })
})