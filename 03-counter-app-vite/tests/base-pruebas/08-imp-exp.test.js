import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Prueba de 08-imp-exp', () => {

  test('getHeroeById debe retornar un heroe por ID', () => {
    const id = 1
    const hero = (getHeroeById(id))
    console.log(hero)
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeById debe retornar undefined si no existe', ()=>{
    const id=100
    const hero=getHeroeById(id)
    expect(hero).toBeFalsy();
  })

  test('Debe retornar un arreglo con los heroes de DC', ()=>{
    // const heroes = getHeroesByOwner('DC')
    // expect(heroes.length).toBe(3)
    // const [heroe1, heroe2, heroe3] = heroes
    // const pruebah1 = { id: 1, name: 'Batman', owner: 'DC' }
    // const pruebah2 = { id: 3, name: 'Superman', owner: 'DC' } 
    // const pruebah3 = { id: 4, name: 'Flash', owner: 'DC' }

    // expect(heroe1).toEqual(pruebah1)
    // expect(heroe2).toEqual(pruebah2)
    // expect(heroe3).toEqual(pruebah3)
    
    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)
    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },      
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ])

    expect(heroes).toEqual(heroes.filter((heroe)=>heroe.owner===owner))

    expect(heroes.length).toBe(3)


    
  })

  test('Debe retornar un arreglo con los heroes de Marvel', ()=>{
    const heroes = getHeroesByOwner('Marvel')
    expect(heroes.length).toBe(2)


  })
})