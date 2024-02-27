import React from 'react'
import CartToggle from '../cartAmountToggle/CartToggle'
// import { useCartContext } from '../../utils/contexts/cartContext';
import { useCartContext } from '../../utils/contexts/Cart_Context';
export default function CartItem({ id, title, image, price, amount, category, description }) {

    const {removeItem, setDecrease, setIncrease} = useCartContext();

    return (
        <div  >
            <div style={{border:"1px solid red"}} >
                <img src={image} alt="img" height={50} width={50} />
                <div >
                    <h4 style={{textAlign:"center"}} >Title : {title}</h4>
                    <p> Price : {price} </p>
                    <p> Category: {category} </p>
                </div>
                <div style={{ display: 'flex', gap:"10px" }} >
                    <CartToggle
                        amount={amount}
                        setDecrease={()=>setDecrease(id)}
                        setIncrease={()=>setIncrease(id)}
                    />
                    <h5> Total Amount: {price * amount} </h5>
                </div>
                <p style={{textAlign:"center", color:"red", cursor:"pointer"}} onClick={()=> removeItem(id)} >Remove</p>
                <hr />
            </div>
        </div>
    )
}
