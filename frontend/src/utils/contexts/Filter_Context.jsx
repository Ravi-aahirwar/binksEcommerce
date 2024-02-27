import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducers/filterReducer.js";
import { useProductContext } from "./Product_Context.jsx";
const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const initialState = {
        filter_products: [],
        all_products: [],
        sorting_value: "",
        filters: {
            text: "",
            category: "All",
            maxPrice: 0,
            price: 0,
            minPrice: 0,
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const sorting = (event) => {
        let sortingVaue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: sortingVaue })
    }

    const handleFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PORODUCTS" })
    }, [state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    return (
        <FilterContext.Provider
            value={{
                ...state,
                sorting,
                handleFilterValue,
            }} >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}

export default FilterContextProvider;