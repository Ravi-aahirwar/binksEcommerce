import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sort from '../../components/sort/Sort';
import { useFilterContext } from '../../utils/contexts/Filter_Context';
import { useProductContext } from '../../utils/contexts/Product_Context';
import ProductsCard from './productsCard/ProductsCard';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from '../../components/categoryFilter/CategoryFilter';

export default function Products() {
  const {all_products, filter_products } = useFilterContext();
  const { isLoading } = useProductContext()
  if (isLoading) {
    return <h1>Loading...</h1>
  }
 
  return (
    <div>
      <Navbar/>
      <Sort />
      <CategoryFilter/>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px", justifyContent: "center" }} >
        {filter_products.map(({ id, title, price, description, image, category }) => {
          return <ProductsCard
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          image={image}
          category={category}
          />
        })}
      </div>
        {
          filter_products.length <= 0 &&
          <h1>Not Item Found</h1>
        }
    </div>
  )
}
