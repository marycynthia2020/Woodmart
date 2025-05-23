import React, { useContext, useEffect, useState } from "react";
import CountButtons from "./CountButtons";
import RemoveFromCartButton from "./RemoveFromCartButton";
import { cartContextProvider } from "../usecontext/CartContext";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [total, setTotal] = useState(0);

  const {cartItem, setCartItem} = useContext(cartContextProvider)

  const closeSideBar = () => {
    setIsOpen(false);
  };
  const removeItemFromCart = item => {
    const ItemsLeftInCart = cartItem.filter(object => item.id !== object.id);
    setCartItem(ItemsLeftInCart);
  };
  
useEffect(()=>{
  let sum = 0
  cartItem?.map(item => {
    let totalItemCost = item.quantity * item.price
    sum+=totalItemCost
    setTotal( sum.toLocaleString())
  })
}, [cartItem])

  return isOpen ? (
    <div className="p-4 w-[80vw] sm:w-[40vw]  lg:w-[30vw] 2xl:w-[20vw] bg-white shadow-lg h-screen fixed right-0 z-10">
      <div className=" text-xl lg:text-2xl font-medium flex items-center justify-between mb-6">
        <h2>Shopping Cart</h2>
        <button onClick={closeSideBar}>X Close</button>
      </div>
      <div className="max-h-[80vh] overflow-y-auto">
        {cartItem?.map(item => (
          <div className="flex gap-4 items-center border mb-6 p-4 hover:bg-gray-400">
            <div className="flex gap-8 items-center  ">
              <div className="w-[100px] h-[100px]">
                <img src={item.image} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-xl">{item.category}</p>
                <p>
                  {item.quantity} * <span className="text-[#1246AB]">${item.price}</span> / each
                </p>
              </div>
            </div>
            <RemoveFromCartButton
              removeItemFromCart={() => {
                removeItemFromCart(item);
              }}
            />
          </div>
        ))}
      </div>
      <div className="font-bold text-2xl flex items-center gap-10 fixed bottom-5 mx-auto">
        <p>Subtotal:</p>
        <p className="text-[#1246AB]">${total}</p>
      </div>
    </div>
  ) : null;
};

export default ShoppingCart;
