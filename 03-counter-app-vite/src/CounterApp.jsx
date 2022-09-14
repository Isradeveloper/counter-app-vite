import PropTypes from 'prop-types'
import { useState } from 'react' // Importamos el hook useState

export const CounterApp = ({ value }) => { // Funcion de React que tiene cómo parametro un prop de value

  // El counter guardará el value y para cambiarlo usamos el set
  // Set cambia el state y hace que este se actualice
  const [ counter, setCounter ] = useState(value) // Hook, se inicializa con el valor del prop

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
      <button  aria-label='btn-reset' onClick={(evento) => reiniciarValue()}> Reset </button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}