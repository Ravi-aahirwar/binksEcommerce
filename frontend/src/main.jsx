import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppProvider from './utils/contexts/Product_Context.jsx'
import FilterContextProvider from './utils/contexts/Filter_Context.jsx'
import CartProvider from './utils/contexts/Cart_Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
            <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>,
)
