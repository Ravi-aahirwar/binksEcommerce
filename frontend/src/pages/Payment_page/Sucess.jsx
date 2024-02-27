import React from 'react'
import { Link } from 'react-router-dom'

export default function Sucess() {
  return (
    <div>
      <h1>Payment Sucess</h1>
      <h1> <Link to="/cart" > Back To Cart </Link> </h1>
    </div>
  )
}
