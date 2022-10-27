import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ id, name, price, img }) => {
  return (
    <Link to={`/shop/item/${id}`}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes"></img>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ItemCard
