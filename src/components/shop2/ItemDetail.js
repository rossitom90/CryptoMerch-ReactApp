import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data/products'
import Clicker from '../Clicker'
import { useFavs } from '../../context/FavContext'

const Loading = () => {
  return <strong className="m-8">Cargando detalles ...</strong>
}

const Item = ({ item }) => {
  const [char, setChar] = useState({})
  const { add, favs } = useFavs()

  const addHandler = () => {
    add(char.name)
    console.log(add, favs)
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={item.img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>Price: {item.price}</p>
        <div className="card-actions justify-end">
          <Clicker />
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>

        <button onClick={addHandler} className="btn">
          Agregar a Favoritos
        </button>
      </div>
    </div>
  )
}

const ItemDetail = () => {
  const { id: itemId } = useParams()
  const [loading, setloading] = useState(true)
  const [item, setItem] = useState({})

  useEffect(() => {
    getItemDetails().then((response) => {
      setItem(response)
      setloading(false)
    })
  }, [])

  const getItemDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.find((p) => p.id === Number(itemId)))
      }, 3000)
    })
  }

  return (
    <>
      {/* { !loading &&
          <div className='m-8'>
            <div>{ item.name }</div>
            <div>Price: { item.price }</div>
          </div>
      } */}
      {loading ? <Loading /> : <Item item={item} />}
    </>
  )
}

export default ItemDetail
