import React, { useState } from 'react';
import CartToggle from '../cartAmountToggle/CartToggle';
// import { useCartContext } from '../../utils/contexts/cartContext';
import { useCartContext } from '../../utils/contexts/Cart_Context';
import { Link } from 'react-router-dom';

export default function AddToCart({ product }) {
    const { addToCart } = useCartContext();
    const { id } = product;
    const [amount, setAmount] = useState(1);

    const stock = 5;
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    const handleAddToCart = () => {
        addToCart(id, amount, product);
    };

    return (
        <div>
            <CartToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />
            <hr />
            <Link to="/cart" onClick={handleAddToCart} >
            <button>Add To Cart</button>
            </Link>
        </div>
    );
}
