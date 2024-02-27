import React from 'react'
import css from "../home/Home.module.css"
import Navbar from '../../components/navbar/Navbar'
import SliderCompo from '../../components/slider/SliderCompo'
import Categories from '../../components/categories/Categories'
// import  {useProductContext}  from '../../utils/contexts/Productcontext'
import { useProductContext } from '../../utils/contexts/Product_Context'

export default function Home() {
  const { isLoading, isError } = useProductContext()

  // if (isLoading) {
  //   return <h2>Loading...</h2>
  // }
  return (
    <div>
      <Navbar />
      {/* <SliderCompo /> */}
      <h1 style={{ color: "red" }} > {isError} </h1>
      <Categories/>
    </div>
  )
}
