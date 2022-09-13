import {render, screen} from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'


describe('Pruebas de CounterApp', () => {

  const initialValue = 100;

  test('Debe hacer el match con el snapshot', ()=> {

    const {container} = render(<CounterApp value={initialValue}/>)
    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar el valor inicial de 100 <CounterApp value=100/>', ()=>{ //Verificar que exista el valor 100 en un renderizado

    render(<CounterApp value={100}/>); //Renderizamos el 100
    expect(screen.getByText(100)).toBeTruthy();

    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100') // Dentro de un H2, Sacamos el texto y lo comparamos con 100

  })

});