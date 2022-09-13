import {render} from '@testing-library/react'
import {FirstApp} from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => {

  // test('Debe de hacer math con el snapshot', ()=>{

  //   const title = 'Hola, soy Gokú'
  //   const {container} = render( <FirstApp title={title} /> )
  //   expect( container ).toMatchSnapshot();

  // })

  test('Debe mostrar el titulo en un H1', () => {

    const title = 'Hola soy Goku';
    const {container, getByText, getByTestId} = render(<FirstApp title={ title }/>)

    expect( getByText(title) ).toBeTruthy(); //Existe el titulo en el render?

    const h1 = container.querySelector('h1')
    console.log(h1.innerHTML)
    expect(h1.innerHTML).toContain(title) //El titulo del h1 es igual al de nuestra variable title?

    expect(getByTestId('test-title').innerHTML).toContain(title) //el titulo del h1 que tiene el atributo testid tiene el titulo igual al de nuestra variable ?

  })

  test('Debe mostrar el subtitulo enviado por props', ()=>{

    const title = 'Hola soy Goku';
    const subTitle = 'Soy un subtitulo';
    const {getByText, getByTestId, getAllByText} = render(
      <FirstApp title={ title } subTitle={subTitle} />
      )

    // expect( getByText(subTitle) ).toBeTruthy(); //Existe el subtitulo en el render?

    expect ( getAllByText(subTitle).length ).toBe(2) //Trae un arreglo con los elementos que tengan ese subtitulo
    console.log(getAllByText(subTitle))
  })

})