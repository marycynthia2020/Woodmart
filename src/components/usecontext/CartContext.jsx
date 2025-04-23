import React from "react";
import { createContext, useState } from "react";

export const cartContext = createContext();

const CartContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [formData, setFormData] = useState({
    searchProduct: "",
  });

  const handleChange = e =>
    setFormData(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });

  const showSideBar = () => {
    setIsOpen(prev => !prev);
  };

  const contextValue = {
    cartItem,
    setCartItem,
    isOpen,
    setIsOpen,
    formData,
    handleChange,
    showSideBar,
  };

  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
};

export default CartContext;
