import React from 'react'
import '../Styles/Card.css'

const Card = ({customer}) => {
  return (
    <div className="card-container">
    <h2>Se envio el libro a tu correo</h2>
    <p>Libro: {customer.libro}</p>
    <p>Correo electronico: {customer.address}</p>
  </div>
  )
}

export default Card