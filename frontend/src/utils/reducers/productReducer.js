const ProductReducer = (state, action) => {
    if (action.type === "LOADING" || action.type === "GET_PRODUCT_LOADING") {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === "GET_API_DATA") {
        return {
            ...state,
            products: action.payload,
            isLoading: false,
        }
    }
    if (action.type === "GET_PRODUCT") {
        return {
            ...state,
            isLoading: false,
            singleProduct: action.payload
        }
    }
    if (action.type === "API_ERROR" || action.type === "GET_PRODUCT_ERROR") {
        return {
            ...state,
            isLoading: false,
            isError: action.payload
        }
    }
    return state
}
export default ProductReducer