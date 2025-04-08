import React, { useState } from "react";
import CountButtons from "./CountButtons";

const ShoppingCart = ({cartItem}) => {
  const [isOpen, setIsOpen] = useState(true);
  const closeSideBar = () => {
    setIsOpen(false);
  };
  return isOpen? (<div className="p-4 w-[80vw] sm:w-[40vw]  lg:w-[30vw] 2xl:w-[20vw] bg-white shadow-lg h-screen fixed right-0">
    <div className=" text-xl lg:text-2xl font-medium flex items-center justify-between mb-6">
      <h2>Shopping Cart</h2>
      <button onClick={closeSideBar}>X Close</button>
    </div>
    {cartItem?.map(item => (
      <div className="h-[60vh] overflow-auto">
      <div className="flex justify-between items-center">
        <img src={item.image} alt="" width={80} />
        <div>
          <p>{item.category}</p>
          <CountButtons qty={item.quantity}/>
        </div>
      </div>
      </div>
    ))}


  </div>): null
}

export default ShoppingCart;
