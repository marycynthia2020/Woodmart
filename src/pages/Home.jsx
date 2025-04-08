import React from 'react'
import Hero from '../components/Hero'
import Product from '../components/Product'

const Home = ({setCartItem, setIsOpen}) => {
  return (
    <div>
      <Hero />
      <Product setCartItem={setCartItem} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default Home