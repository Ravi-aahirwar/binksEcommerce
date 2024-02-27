const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload;
        // existing Product In Cart
        let existingProduct = state.cart.find((elm) => elm.id === id);
        if (existingProduct) {
            let updatedProduct = state.cart.map((elm) => {
                if (elm.id === id) {
                    let newAmount = elm.amount + amount;
                    return {
                        ...elm,
                        amount: newAmount
                    };
                } else {
                    return elm;
                }
            });

            return {
                ...state,
                cart: updatedProduct,
            }

        } else {
            // existing Product In Cart Finish
            let cartProduct;
            cartProduct = {
                id,
                title: product.title,
                amount,
                image: product.image,
                category: product.category,
                price: product.price,
                description: product.description,
                max: product.stock,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }
    }
    // Add to  WishList 
    if (action.type === "ADD_TO_FAVOURITE") {
        let { id, product } = action.payload;
        let existingProduct = state.favourite.find((elm) => elm.id === id)
        if (existingProduct) {
            alert("Product Already In WishList ! Choose Another One :)")
        } else {
            alert("Added Favourite")
            let favouriteProduct;
            favouriteProduct = {
                id,
                title: product[1],
                price: product[2],
                description: product[3],
                image: product[4],
                category: product[5],
            }
            return {
                ...state,
                favourite: [...state.favourite, favouriteProduct],
                // wishList:"Product Added To WishList:)"
            }
        }
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (elm) => elm.id !== action.payload
        );
        return {
            ...state,
            cart: updatedCart,
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((elm) => {
            if (elm.id === action.payload) {
                let decAmount = elm.amount - 1;
                if (decAmount <= 1) {
                    decAmount = 1;
                }
                return {
                    ...elm,
                    amount: decAmount,
                };
            } else {
                return elm;
            }
        });
        return {
            ...state, cart: updatedProduct
        }
    }

    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((elm) => {
            if (elm.id === action.payload) {
                let incAmount = elm.amount + 1;
                if (incAmount >= elm.max) {
                    incAmount = elm.max
                }
                return {
                    ...elm,
                    amount: incAmount,
                };
            } else {
                return elm;
            }
        });
        return {
            ...state, cart: updatedProduct
        }
    }

    if (action.type === "CART_TOTAL_ITEM") {
        let updatedItem = state.cart.reduce((initialVal, elm) => {
            let { amount } = elm;
            initialVal = initialVal + amount;
            return initialVal;
        }, 0)
        return {
            ...state,
            total_item: updatedItem,
        }
    }

    if (action.type === "CART_TOTAL_PRICE") {
        let total_price = state.cart.reduce((initialVal, elm) => {
            let { price, amount } = elm;
            initialVal = initialVal + (price * amount);
            return initialVal;
        }, 0)
        return {
            ...state,
            total_price,
        }
    }
    return state;
}

export default CartReducer