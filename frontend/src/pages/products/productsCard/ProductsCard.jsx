import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../../../utils/contexts/Cart_Context';

export default function ProductsCard({ id, title, price, description, image, category }) {
    const {addToWishList} = useCartContext();
    const singleProduct = [id, title, price, description, image, category]

    const handleWishList = () => {
        addToWishList(id, singleProduct)
    }

    return (
        <div style={{ border: "1px solid white" }} >
            <Link to={`/detail/${id}`} >
                <img src={image} alt="Img" height={50} width={50} />
                <h4> Id:{id} </h4>
                <h4> Title : {title.slice(0, 60)} </h4>
                <h5> Price : {price} </h5>
            </Link>
            <h5> Category: {category} </h5>
            <h3 onClick={handleWishList} style={{ color: "red", cursor: "pointer" }}>Add To Wish List</h3>
        </div >
    )
}
{/*  */ }
