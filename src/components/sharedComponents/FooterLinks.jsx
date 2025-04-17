import { GrDirections } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import logo from "/images/Logo.svg";
import googlePlay from "/images/googleplay1.svg"
import appleStore from "/images/applestore1.svg"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";


const FooterLinks = () => {
  return (
    <div className=" cursor-pointer px-2 w-full 2xl:w-[80vw] mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 text-[#767676] items-center mb-8">
      <div>
        <div className="mb-6">
          <img src={logo} alt="woodmart logo" />
        </div>
        <ul className=" mr-4">
          <li className="mb-4">
            Condimentum adipiscing vel neque dis nam parturient orci at
            scelerisque neque dis nam parturient.
          </li>
          <li className="flex gap-3 items-center mb-4">
            <GrDirections className="text-[#1246AB]" />
            <span>451 Wall Street, UK, London</span>
          </li>
          <li className="flex gap-3 items-center mb-4">
            <MdPhoneIphone className="text-[#1246AB]" />
            <span>Phone: (064) 332-1233</span>
          </li>
          <li className="flex gap-3 items-center mb-8">
            < BsEnvelope className="text-[#1246AB]" />
            <span>
            Fax: (099) 453-1357</span>
          </li>
          
        </ul>
      </div>
      <ul>
        <li className="text-black font-medium mb-4">Our Stores</li>
        <li className=" mb-4">New York</li>
        <li className=" mb-4">London SF</li>
        <li className=" mb-4">Cockfosters BP</li>
        <li className=" mb-4">Los Angeles</li>
        <li className=" mb-4">Chicago</li>
        <li className=" mb-8">Las Vegas</li>
      </ul>

      <ul>
      <li className="text-black font-medium mb-4">Useful Links</li>
      <li className=" mb-4">Privacy Policy</li>
      <li className=" mb-4">Payment and Delivery</li>
      <li className=" mb-4">Promotions</li>
      <li className=" mb-4">Servicess</li>
      <li className=" mb-4">About Us</li>
      <li className=" mb-8">Track Order</li>
      </ul>

      <ul>
      <li className="text-black font-medium mb-4">Footer menu</li>
      <li className=" mb-4">Instagram profile</li>
      <li className=" mb-4">New Colection</li>
      <li className=" mb-4">Shop</li>
      <li className=" mb-4">Contact Us</li>
      <li className=" mb-4">Latest News</li>
      <li className=" mb-8">purchase Theme</li>
      </ul>
      <div>
            <p className="mb-4 font-medium text-black">Available On:</p>
            <img src={googlePlay} alt="google playstore" className="mb-4" />
            <img src={appleStore} alt="Apple store"  className="mb-4"/>
            <p className="mb-4 font-medium text-black">Social Links:</p>
            <div className="flex  items-center gap-3 text-4xl">
                <FaFacebook  className="text-blue-600"/>
                <AiFillTwitterCircle className="text-black" />
                <RiInstagramFill className="text-red-200"/>
                <SiYoutubemusic className="text-red-600"/>
            </div>
      </div>
    </div>

  );
};

export default FooterLinks;
