import React, { useContext, useEffect, useState } from 'react'
import { DarkmodeContext } from '../../context/DarkmodeContext'
import { products } from './data/products'
import ItemCard from './ItemCard'

const ItemList = () => {
  const [items, setItems] = useState([])
  const Darkmode = useContext(DarkmodeContext)

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response)
      setItems(response)
    })
  }, [])

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 1000)
    })
  }

  return (
    <>
      <div class="flex flex-wrap space-x-4 space-y-4 justify-center">
        {items.map((i) => (
          <ItemCard key={i.id} {...i} />
        ))}

        <div>
          <strong>Darkmode: {Darkmode ? 'Activado' : 'Desactivado'}</strong>
        </div>
      </div>
    </>
  )
}

export default ItemList
