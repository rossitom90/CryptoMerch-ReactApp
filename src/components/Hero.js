import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.pinimg.com/736x/56/0c/82/560c82059ee2592877eb65be4fbd1192.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Encuentra el mejor Merch de Crypto
          </h1>
          <p className="py-6">
            Merchandising de eventos y a medida, con los proyectos crypto que
            mas te entusiasmen.
          </p>
          <Link to="/shop">
            <button className="btn btn-primary">Marketplace</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
