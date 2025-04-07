import { useEffect, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
// import image from "/images/backgroundcarpenter1.jpg";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const closeSideBar = () => {
    setIsOpen(false);
  };
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data)
        setProducts( data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="px-2 w-full 2xl:w-[80vw] mx-auto font-semibold mb-6">
      <div className="flex flex-col xl:flex-row gap-4 xl:justify-between items-center text-xl mb-4">
        <div>Featured Products</div>
        <div className="flex items-center gap-4 text-[#333333B3]">
          <p>New</p>
          <p>Featured</p>
          <p>Top Sellers</p>
        </div>
      </div>
      <div className=" grid grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-0 items-stretch  ">
        {products.map(item => (
          <div className="p-4 flex flex-col gap-2 border-2 justify-between">
          <div className="self-center w-[200x] h-[160px]">
          <img src={item.image} alt="product" className="w-full h-full"/>
          </div>
          <p>{item.category}</p>
          <div className="flex gap-1 items-center">
            <IoCheckmarkOutline className="text-[#1246AB]" />
            <span>In stock</span>
          </div>
          <p className="text-[#1246AB]">
            ${item.price} <span className="text-[#333333B3]">/ each</span>
          </p>
          <div className="flex items-center bg-[#1246AB] text-white justify-between p-3">
            <div className="flex items-center gap-2">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className="">ADD <span className="hidden sm:inline">TO CART</span></div>
          </div>
        </div>
        ))}
      </div>
      
    </div> 
  );
};

export default Product;
  