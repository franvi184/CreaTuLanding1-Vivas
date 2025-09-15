import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='CardProducto'>
        <img src={img} alt={nombre} />
        <div className='CardDetails'>
          <h2>Nombre: {nombre}</h2>
          <p>Precio: {precio}</p>
          <p>ID: {id}</p>
          <Link to={`/item/${id}`}><button>Ver detalles</button></Link>
          
        </div>
    </div>
  )
}

export default Item