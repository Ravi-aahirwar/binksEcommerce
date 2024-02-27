import React from 'react'
import css from '../categories/Categories.module.css'
import { category } from './categoryData'
import { Link } from 'react-router-dom'
export default function Categories() {
    return (
        <div style={{display:"flex",gap:"20px",justifyContent:"center"}}>
            {category.map(({id, item}) => {
                return <div key={id}> <Link to="/products"> {item} </Link> </div>
            })}
        </div>
    )
}
