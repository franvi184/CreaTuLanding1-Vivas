import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../Asycmocks'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect (() => {
        getUnProducto(idItem)
        .then(respuesta => setProducto(respuesta))
    }, [idItem])

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer