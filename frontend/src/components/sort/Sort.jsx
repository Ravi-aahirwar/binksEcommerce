import React from 'react'
// import { useFilterContext } from '../../utils/contexts/filterContext'
import { useFilterContext } from '../../utils/contexts/Filter_Context';

export default function Sort() {
  const { filter_products } = useFilterContext();
  const {sorting} = useFilterContext();
  return (
    <div>
      <h1> {filter_products.length} Products Available </h1>
      <h2> Sort By Price.</h2>
      {/* <span style={{color:"red"}}> {query} </span> */}
      <form onChange={sorting}>
        <label>
          <input type="radio" id='low' name='radio' value="lowest" />
          High to Low.
        </label>
        <label>
          <input type="radio" id='High' name='radio' value="highest" />
          Low to High.
        </label>
        <label>
          <input type="radio" id='a-z' name='radio' value="a-z" />
          Products :A-Z
        </label>
        <label>
          <input type="radio" id='z-a' name='radio' value="z-a" />
          Products :Z-A
        </label>
      </form>
    </div>
  )
};


