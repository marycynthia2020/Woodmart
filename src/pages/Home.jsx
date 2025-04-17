import React from 'react'
import Hero from '../components/Hero'
import Product from '../components/Product'

const Home = ({setCartItem, setIsOpen, formData}) => {
  return (
    <div>
      <Hero />
      <Product setCartItem={setCartItem} setIsOpen={setIsOpen} formData={formData}/>
    </div>
  )
}

export default Home