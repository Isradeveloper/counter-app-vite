import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-deses-obj', () => {

  test('usContext debe retornar un objeto', () => {

    const testUsContext = usContext({clave: "AAA", nombre: 'Manuel', edad: 19, rango: 'Cabo'})

    const test = {
        nombreClave: 'AAA',
        anios: 19,
        rango: 'Capitan',
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

    expect(testUsContext).toEqual(test)
  }

  )
})