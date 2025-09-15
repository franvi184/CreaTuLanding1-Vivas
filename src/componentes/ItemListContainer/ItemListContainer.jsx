import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import { getProductos, getProductosPorCategoria } from '../../Asycmocks'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams()
  
  useEffect(()=> {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos
    funcionProductos(idCategoria)
      .then(resolve => setProductos(resolve))
  }), ([idCategoria])

  return (
    <>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer