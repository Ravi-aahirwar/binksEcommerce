import React from 'react'
import css from "../navbar/Navbar.module.css"
import { Search } from '@mui/icons-material'
import { Store } from '@mui/icons-material'
import { ShoppingBasket } from '@mui/icons-material'
import { Person } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { useFilterContext } from '../../utils/contexts/Filter_Context'
import { useCartContext } from '../../utils/contexts/Cart_Context'
import { FavoriteOutlined } from '@mui/icons-material'
export default function Navbar() {
const navigate = useNavigate();
  const { handleFilterValue, filters: { text } } = useFilterContext()

  const {total_item, cart, favourite} = useCartContext();

  if (text) {
    navigate("/products")
  }

  return (
    <div className={css.outerDiv}>
      <div className={css.logo_div}>
        <Link to="/" className={css.link}><h2> Blinks. </h2> </Link>
      </div>
      <div className={css.icons_div}>
        <div className={css.input_div}>
          <input type="text"
          placeholder='Search'
          name='text'
          value={text}
          autoComplete='off'
          onChange={(handleFilterValue)} />
          <Search className={css.search} />
        </div>
        <div className={css.inner_icons_div}>
          <Link to="/products">
            <Store className={css.store} />
          </Link>
          <Link to="/wishlist" >
            <FavoriteOutlined className={css.wishlist} />
            <span style={{color:"red"}}> {favourite.length} </span>
          </Link>
          <Link to="/cart">
            <ShoppingBasket className={css.basket} />
            {/* <span className={css.cart_item}> {cart.length} </span> */}
          </Link>
          <Link to="/profile">
            <Person className={css.person} />
          </Link>
        </div>
      </div>
    </div>
  )
}
