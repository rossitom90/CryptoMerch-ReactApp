import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ id, name, price, img }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes"></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <Link to={`/shop/item/${id}`}>
            <button className="btn btn-primary">Comprar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
