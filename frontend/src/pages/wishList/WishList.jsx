import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useCartContext } from '../../utils/contexts/Cart_Context';
import WishListCompo from '../../components/wishlistComponents/WishListCompo';
export default function WishList() {

  const { favourite } = useCartContext();
  return (
    <div>
      <Navbar />
      <h2>WishList Page</h2>
      <hr />
      {
        favourite.map(({id, title, price, description, image, category }) =>{
          return(
            <WishListCompo
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            image={image}
            category={category}
            />
          )
        })
      }
      {/* {favourite.length <= 0 && (
        <h2>Add Your Favourite Products</h2>
      )} */}
    </div>
  )
}
