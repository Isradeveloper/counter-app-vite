import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {

  // El counter guardará el value y para cambiarlo usamos el set
  // Set cambia el state y hace que este se actualice
  const [ counter, setCounter ] = useState(value)

  const sumarValue = () => {
    setCounter(counter + 1);
    // setCounter((c)=> c+1)
  }

  const restarValue = () => {
    setCounter(counter - 1)
  }

  const reiniciarValue = () => {
    setCounter(value)
  }

  return (
    <>
      <h1> CounterApp </h1>
      <h2> {counter} </h2>

      {/* Si no mandamos parametros, se enviará el evento por defecto */}
      <button onClick={(evento) => sumarValue()}> +1 </button>
      <button onClick={(evento) => restarValue() }> -1 </button>
      <button onClick={(evento) => reiniciarValue()}> Reset </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}