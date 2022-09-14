import {fireEvent, render, screen} from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'


describe('Pruebas de CounterApp', () => {

  const initialValue = 10;

  test('Debe hacer el match con el snapshot', ()=> {

    const {container} = render(<CounterApp value={initialValue}/>)
    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar el valor inicial de 100 <CounterApp value=100/>', ()=>{ //Verificar que exista el valor 100 en un renderizado

    render(<CounterApp value={100}/>); //Renderizamos el 100
    // expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100') // Dentro de un H2, Sacamos el texto y lo comparamos con 100

  })

  test('Debe incrementar con el botón +1', ()=>{

    render(<CounterApp value={initialValue} />)
    fireEvent.click( screen.getByText('+1') ) // Se ejecuta el evento click en el elemento que tiene +1
    expect(screen.getByText('11')).toBeTruthy() // Comparamos si el screen tiene un elemento con 11 (O sea que haya sumado con el botón)

  })

  test('Debe de decrementar con el botón -1', ()=>{

    render(<CounterApp value={initialValue}/>)
    fireEvent.click(screen.getByText('-1'))
    // screen.debug()
    expect(screen.getByText('9')).toBeTruthy()
  })

  test('Debe resetear el botón', ()=>{

    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('-1')) // Click en boton -1
    fireEvent.click(screen.getByText('-1')) // Click en boton -1
    fireEvent.click(screen.getByText('-1')) // Click en boton -1
    fireEvent.click(screen.getByText('-1')) // Click en boton -1
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'})) // Click en reset, utilizando arial-label edita el name

    expect(screen.getByText( 10 )).toBeTruthy()
    screen.debug()

  })

});