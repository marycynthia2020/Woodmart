import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "/images/Logo.svg"

const TopNav = () => {
  return (
    <nav className="py-6 px-2 w-full 2xl:w-[80vw] mx-auto text-[#777777] flex items-center lg:justify-between justify-center">
        <NavLink  >
            <img src={logo} alt="woodmart logo"/>
        </NavLink>
        <div className="hidden lg:flex gap-4 justify-between items-center" >
           <div className=" flex gap-2 items-center justify-between">
           <CiLocationOn />
            <span>Find a Store</span>
            <IoIosArrowDown />
           </div>
            <p>Opened Until <span className="font-bold text-[#1246AB]">9PM</span></p>
        </div>
        <div className="hidden lg:flex gap-8 items-center justify-between">
            <NavLink to="/expertadvice">
                Expert Advice
            </NavLink>
            <NavLink to="/aboutus">
                About US
            </NavLink>
            <NavLink to="/trackorder">
                TrackOrder
            </NavLink>
            <IoPersonOutline />
        </div>
    </nav>

  )
}

export default TopNav