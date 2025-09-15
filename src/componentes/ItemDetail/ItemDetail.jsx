import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='CardDetail'>
        <img src={img} alt={nombre} />
        <div>
          <h2>Nombre: {nombre}</h2>
          <p>Precio: {precio}</p>
          <p>ID: {id}</p>
          <button>Ver detalles</button>
        </div>
    </div>
  )
}

export default ItemDetail