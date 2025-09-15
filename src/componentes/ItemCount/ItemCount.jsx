import React, { useState } from 'react'

const ItemCount = ({}) => {

    const [contador, setContador] = useState(1)

    const incrementar = () => {
        if(contador < 10) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > 5){
            setContador(contador - 1)
        }
    }

  return (
    <div>
        <button onClick={incrementar}> + </button>
        <p>{contador}</p>
        <button onClick={decrementar}> - </button>
    </div>
  )
}

export default ItemCount