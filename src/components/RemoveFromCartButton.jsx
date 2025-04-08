import React from 'react'

const RemoveFromCartButton = ({removeItemFromCart, item}) => {
    
    
  return (
    <button className='text-xl text-red-500' onClick={()=>{removeItemFromCart(item)}}>X</button>
  )
}

export default RemoveFromCartButton