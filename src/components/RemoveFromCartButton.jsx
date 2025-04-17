import React from 'react'

const RemoveFromCartButton = ({removeItemFromCart, item}) => {
    
    
  return (
    <button onClick={()=>{removeItemFromCart(item)}}>X</button>
  )
}

export default RemoveFromCartButton