import React, { useEffect, useState } from 'react'
// import { useFilterContext } from '../../utils/contexts/filterContext'
import { useFilterContext } from '../../utils/contexts/Filter_Context';

export default function CategoryFilter() {

    const { all_products, handleFilterValue, filters: { price, maxPrice, minPrice }} = useFilterContext();

    const getUniqueProperty = (data, property) => {
        let newData = data.map((elm) => {
            return elm[property]
        })
        return (newData = ["All", ...new Set(newData)]);
    }
    const categoryData = getUniqueProperty(all_products, "category")




    return (
        <div>
            {/* <button onClick={clearFilters} > Clear Filters </button> */}
            <h4>Category Filter</h4>
            {
                categoryData.map((elm, index) => {
                    return (
                        <label key={index} >
                            <input
                                type="radio"
                                name='category'
                                value={elm}
                                onChange={handleFilterValue}
                            />
                            {elm}.
                        </label>
                    )
                })
            }
            <h5> Range Price Filter </h5>
            <p> {price.toLocaleString()} </p>
            <input type="range"
                min={minPrice}
                max={maxPrice}
                name='price'
                value={price} onChange={handleFilterValue}
            />

        </div>
    )
}
