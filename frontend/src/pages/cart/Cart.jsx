import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useCartContext } from '../../utils/contexts/Cart_Context';
import CartItem from '../../components/cartItem/CartItem';
import { Link } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js"
import dotenv from 'dotenv'
dotenv.config
export default function Cart() {

  const { cart, clearCart, total_item, total_price, shipping_fee } = useCartContext();
  let totalPrice = shipping_fee + total_price;

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51Ony30SINGekyYxSNFwFd8a20sZ0Qp2WqvxjufiheelACz4ARUiwVPYi0AQgd45ecPIgcaf0mA0YxtSmtbFx7aiV00E1SFJWqg")
    const body = {
      products: cart,
    }
    const headers = {
      "Content-Type": "application/json"
    }
    const response = await fetch("http://localhost:7000/api/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });
    if(result.error){
      console.log(result.error);
    }
    else{
      clearCart()
    }

  }

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <h2> Cart Page: {total_item} </h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {
          cart.map((elm, index) => {
            return <CartItem key={index} {...elm} />
          })
        }
      </div>
      <Link to="/products">
        <h4>Continue Shopping</h4>
      </Link>
      <button onClick={clearCart} >Clear Cart</button>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
        <h3> SubTotal : {total_price} </h3>
        <h3> Shipping Fees : {shipping_fee} </h3>
        <hr />
        <h2>Order Total : {totalPrice.toLocaleString()} </h2>
        {
          cart.length >=1 ?(
            <button onClick={makePayment} >Check Out.</button>
          ):(
            <button disabled >Check Out</button>
          )
        }
        
      </div>
    </div>
  )
}
