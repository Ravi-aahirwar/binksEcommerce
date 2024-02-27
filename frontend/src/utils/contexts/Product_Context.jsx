import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/productReducer'
import axios from "axios";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    let initialState = {
        isLoading: false,
        isError: false,
        products: [],
        singleProduct:{},
    }
    let rav = "ravi_kumarAhirwar999"
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const API = "https://fakestoreapi.com/products"
    const getApiData = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const res = await axios.get(url);
            const apiData = await res.data
            dispatch({type:"GET_API_DATA", payload: apiData})
        } catch (error) {
            dispatch({type:"API_ERROR", payload: error.message})
        }
    }

    const getApiProduct = async (url)=>{
            dispatch({type:"GET_PRODUCT_LOADING"})
        try {
            const res = await axios.get(url);
            const apiProduct = await res.data;
            dispatch({type:"GET_PRODUCT", payload: apiProduct})
        } catch (error) {
            dispatch({key:"GET_PRODUCT_ERROR", payload: error.message})
        }
    }

    useEffect(() => {
        getApiData(API)
    }, [])
    return (
        <AppContext.Provider value={{ ...state,
         getApiProduct,
          }} >
            {children}
        </AppContext.Provider>
    )
};

export const useProductContext = ()=>{
    return useContext(AppContext);
}
export default AppProvider;