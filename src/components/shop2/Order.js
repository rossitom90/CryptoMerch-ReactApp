import React, { useState } from 'react'
import {
  doc,
  addDoc,
  collection,
  getFirestore,
  updateDoc,
} from 'firebase/firestore'
import swal from 'sweetalert'

export const UserForm = ({ setUser }) => {
  const updateUser = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }))
    console.log(event.target.value)
    console.log(event.target.name)
  }

  return (
    <div className="m-10">
      <div className="m-3">
        name:{' '}
        <input
          onChange={updateUser}
          name="name"
          type="text"
          className="border border-indigo-800"
        />
      </div>
      <div className="m-3">
        phone:{' '}
        <input
          onChange={updateUser}
          name="phone"
          type="text"
          className="border border-indigo-800"
        />
      </div>
      <div className="m-3">
        email:{' '}
        <input
          onChange={updateUser}
          name="email"
          type="text"
          className="border border-indigo-800"
        />
      </div>
    </div>
  )
}

const Order = () => {
  const [user, setUser] = useState({})
  const items = ['Buzo eth', 'Remera btc', 'Taza crypto']

  const putOrder = () => {
    const order = {
      buyer: user,
      items: items,
      total: 2,
    }

    console.log(order)

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order).then(({ id }) => {
      console.log(id)
      swal('Good job!', 'Se levantó la orden', 'success')
    })
  }

  const modifyOrder = () => {
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    const orderDoc = doc(ordersCollection, 'jHzF34Wz2Tt4KlzHHpmR')
    updateDoc(orderDoc, { total: 10 }).then((res) => {
      console.log(res)
      swal('Good job!', 'Se modificó la orden', 'success')
    })
  }

  return (
    <div>
      <h1 className="text-5xl">Orden</h1>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}

      <UserForm setUser={setUser} />

      <button className="btn" onClick={putOrder}>
        Levantar orden
      </button>
      <button className="btn" onClick={modifyOrder}>
        Modificar orden
      </button>
    </div>
  )
}

export default Order
