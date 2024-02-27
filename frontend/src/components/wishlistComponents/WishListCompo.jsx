import React from 'react'
import { Link } from 'react-router-dom'
export default function WishListCompo({ id, title, price, description, image, category }) {
  return (
    <div>
      <div style={{ border: "1px solid white" }} >
            <Link to={`/detail/${id}`} >
                <img src={image} alt="Img" height={50} width={50} />
                <h4> Id:{id} </h4>
                <h4> Title : {title.slice(0, 60)} </h4>
                <h5> Price : {price} </h5>
            </Link>
            <h5> Category: {category} </h5>
            <Link to="/cart" >
            <h3 style={{ color: "green", cursor: "pointer" }}>Add to Cart</h3>
            </Link>
            <h2 style={{ color: "red", cursor: "pointer" }} >Delete</h2>
        </div >
    </div>
  )
}
