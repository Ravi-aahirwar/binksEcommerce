import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from '../reducers/cartReducer'
const cartContext = createContext();

const CartProvider = ({ children }) => {

const getLoaclCartData = ()=>{
    let cartData = localStorage.getItem("binksCart")
    if(cartData == []){
        return [];
    } else{
        return  JSON.parse(cartData)
    }
}

    const initialState = {
        // cart: [],
        cart: getLoaclCartData(),
        favourite: [],
        wishList:"",
        total_item: "",
        total_price: "",
        shipping_fee: 0,
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    // local Storage

    useEffect(()=>{
        localStorage.setItem("binksCart", JSON.stringify(state.cart) )
    },[state.cart]);

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    }
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })
    }
    const addToWishList = (id, product) => {
        dispatch({ type: "ADD_TO_FAVOURITE", payload: { id, product } })
    }

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" })
        dispatch({ type: "CART_TOTAL_PRICE" })
    }, [state.cart])

    return (
        <cartContext.Provider value={{
            ...state,
            addToCart,
            removeItem,
            clearCart,
            setDecrease,
            setIncrease,
            addToWishList
        }} >
            {children}
        </cartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(cartContext)
}

export default CartProvider;