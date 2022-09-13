import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-Async-await.js', () => {

  test('GetImagen debe retornar un url', async() => {
    const resp = await getImagen()
    expect(resp).toBe('No se encontró la imagen')
  })

})