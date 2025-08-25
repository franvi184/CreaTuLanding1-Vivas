import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div className='Contenedor'>
    <h1>{props.texto}</h1>
    </div>
  )
}

export default ItemListContainer