const reducer = (state, action) => {

    if (action.type === "LOAD_FILTER_PRODUCTS") {
        let priceArray = action.payload.map((elm) => elm.price)
        let maxPrice = Math.max(...priceArray)
        return {
            ...state,
            all_products: [...action.payload],
            filter_products: [...action.payload],
            filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice }
        }
    }

    if (action.type === "GET_SORT_VALUE") {
        return {
            ...state,
            sorting_value: action.payload
        }
    }

    if (action.type === "SORTING_PORODUCTS") {
        let newSortdata;
        const { filter_products, sorting_value } = state;
        let tempSortProduct = [...filter_products]
        const sortingProducts = (a, b) => {
            if (sorting_value === "highest") {
                return a.price - b.price
            }
            if (sorting_value === "lowest") {
                return b.price - a.price
            }
            if (sorting_value === "a-z") {
                return a.category.localeCompare(b.category)
            }
            if (sorting_value === "z-a") {
                return b.category.localeCompare(a.category)
            }
        }

        newSortdata = tempSortProduct.sort(sortingProducts)
        return {
            ...state,
            filter_products: newSortdata,
        }
    }

    if (action.type === "UPDATE_FILTER_VALUE") {
        const { name, value } = action.payload;
        return {
            ...state,
            filters: {
                ...state.filters, [name]: value
            }
        }
    }
    if (action.type === "FILTER_PRODUCTS") {
        let { all_products } = state;
        let filterProducts = [...all_products];

        const { text, category, price } = state.filters;
        if (text) {
            filterProducts = filterProducts.filter((elm) => {
                return elm.title.toLowerCase().includes(text.toLowerCase());
            })
        }
        if (category !== "All") {
            filterProducts = filterProducts.filter((elm) => {
                return elm.category === category;
            })
        }
        if (price === 0) {
            filterProducts = filterProducts.filter((elm) => elm.price === price)
        } else {
            filterProducts = filterProducts.filter((curElm) => curElm.price <= price);
        }
        return {
            ...state,
            filter_products: filterProducts,
        }
    }

    // if(action.type === "CLEAR_FILTERS"){
    //     return{
    //         ...state,
    //         filters:{
    //             ...state.filters,
    //             category:"All",
    //             maxPrice:0,
    //             price:state.filters.maxPrice,
    //             minPrice: state.filters.maxPrice,
    //             sorting_value:"All",
    //         }
    //     }
    // }



    return state;
}

export default reducer;