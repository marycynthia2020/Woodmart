import { useState } from "react"

const CountButtons = ({setCartItem, item, setIsOpen, qty, ADD, TOCART}) => {
    const [count, setCount] = useState(qty || 1)

    const addToCart = () => {
        const cartItem = {...item, quantity:count}
        setCartItem(prev => {
            const found = prev.find(item => item.id === cartItem.id)
            if(found){
                return prev.map(item => item.id=== found.id? {...item, quantity:count}: item)
            }
            return [...prev, cartItem]
        })
        setIsOpen(prev => !prev)
          
      }

  return (
    <div className="flex items-center bg-[#1246AB] text-white justify-between p-3">
    <div className="flex items-center gap-2 place-self-center">
    <button onClick={() => setCount(prev => prev >1 ? prev -1 : 1)}>-</button>
    <span>{count}</span>
    <button  onClick={() => setCount(count + 1)}>+</button>
  </div>
  <button  onClick={ addToCart}>{ADD}  <span className="hidden sm:inline">{TOCART}</span></button>
  </div>
  )
}

export default CountButtons