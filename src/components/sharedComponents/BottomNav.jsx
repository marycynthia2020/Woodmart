import { BiCategory } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import  { cartContextProvider } from "../../usecontext/CartContext";

const BottomNav = () => {
  const {cartItem, formData, handleChange, showSideBar} = useContext(cartContextProvider)
  
  const cartItemCount = cartItem.length;
  
  return (
    <nav className="py-4 px-2 w-full text-white bg-[#1246AB] flex items-center justify-between font-semibold ">
      <div className="w-full 2xl:w-[80vw] mx-auto flex justify-between items-center bg-[#1246AB]">
        <div className="hidden lg:flex items-center justify-between gap-8">
          <NavLink to="allcategories" className="flex items-center gap-2">
            <BiCategory />
            All Categories
            <IoIosArrowDown />
          </NavLink>
          <NavLink to="services" className="flex items-center gap-2">
            <GrServices />
            Services
          </NavLink>
          <NavLink to="promotions" className="flex items-center gap-2">
            <RiSecurePaymentLine />
            Promotions
          </NavLink>
          <NavLink to="paymentanddelivery" className="flex items-center gap-2">
            <RiSecurePaymentLine />
            Payment And Delivery
          </NavLink>
        </div>
        <div className="flex items-center justify-between gap-6 cursor-pointer">
          <div className="bg-white flex items-center justify-between text-black py-3  px-8 ">
            <input
              type="text"
              placeholder="search for a product"
              className="text-sm outline-none"
              name="searchProduct"
              value={formData.searchProduct}
              onChange={handleChange}
            />
            <IoIosSearch className="text-2xl" />
          </div>
          <div className="hidden lg:block text-2xl p-3 rounded-full border border-white">
            <FaRegHeart />
          </div>
          <div className=" hidden lg:block text-2xl p-3 rounded-full border border-white">
            <GrServices />
          </div>
          <div className=" text-2xl p-3 rounded-full border border-white relative ">
            <IoCartOutline onClick={showSideBar} />
            <div className=" h-5 w-5 font-normal flex items-center justify-center text-sm text-black bg-white rounded-full  absolute top-0 -right-1">
              <span>{cartItemCount}</span>
            </div>
          </div>
        </div>
        <IoPersonOutline className=" 2xl:hidden text-3xl" />
      </div>
    </nav>
  );
};

export default BottomNav;
