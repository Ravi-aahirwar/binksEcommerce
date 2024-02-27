import React, { useEffect, useState } from 'react'
// import { useProductContext } from '../../utils/contexts/Productcontext.jsx'
import { useProductContext } from '../../utils/contexts/Product_Context.jsx';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx'
import AddToCart from '../../components/addToCart/AddToCart.jsx';
export default function ProductDetail() {

  const { productdetail } = useParams();
  const { singleProduct, getApiProduct, isLoading } = useProductContext();
  const API = "https://fakestoreapi.com/products";

  // console.log("Params",productdetail)

  // if(isLoading){
  //   return <h2>Loading...</h2>
  // }

  const {
    id:abcd,
    price,
    description,
    category,
    image,
    title,
  } = singleProduct;

  useEffect(() => {
    getApiProduct(`${API}/${productdetail}`)
  }, [API]);
  return (
    <div>
      <Navbar />
      <div>
        <img src={image} alt={category} height={60} width={60} />
        <h2> Id : {productdetail} </h2>
        <h2>title: {title}</h2>
        <h4> Price: {price} </h4>
        <h5>Descriptions: {description} </h5>
        <h5> Category: {category} </h5>
      </div>
      <hr />
      <AddToCart product={singleProduct} />
    </div>
  )
}
