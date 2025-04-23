import { useContext, useEffect, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import CountButtons from "./CountButtons";
import cartContext from "./usecontext/CartContext";

const Product = () => {
  console.log(cartContext)
  const [productData, setProductData] = useState([]);
  const [products, setProducts] = useState([]);

  const { setCartItem, setIsOpen, formData} = useContext(cartContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductData(data);
        setProducts(data);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);

  const searchValue = formData.searchProduct;

  useEffect(() => {
    if (searchValue) {
      const foundProducts = productData.filter(item =>
        item.category.includes(searchValue.toLowerCase())
      );
      setProducts(foundProducts);
    }
  }, [searchValue]);

  const showAllProducts = () => setProducts(productData);

  const showNewProducts = () => {
    const filteredNewProducts = productData.filter(
      item =>
        item.category === "men's clohting" ||
        item.category === "women's clothing"
    );
    setProducts(filteredNewProducts);
  };

  const showFeaturedProducts = () => {
    const filteredFeaturedProducts = productData.filter(
      item => item.category === "jewelery"
    );
    setProducts(filteredFeaturedProducts);
  };

  const showTopProducts = () => {
    const filteredTopProducts = productData.filter(
      item => item.category === "electronics"
    );
    setProducts(filteredTopProducts);
  };

  return (
    <div className="px-2 w-full 2xl:w-[80vw] mx-auto font-semibold mb-6">
      <div className="flex flex-col xl:flex-row gap-4 xl:justify-between items-center text-xl mb-4">
        <button onClick={showAllProducts}>All Products</button>
        <div className="flex items-center gap-4 text-[#333333B3]">
          <button onClick={showNewProducts}>New</button>
          <button onClick={showFeaturedProducts}>Featured</button>
          <button onClick={showTopProducts}>Top Sellers</button>
        </div>
      </div>
      <div className=" grid grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-0 items-stretch  ">
        {products.map(item => (
          <div
            key={item.id}
            className="p-4 flex flex-col gap-2 border-2 justify-between"
          >
            <div className="self-center w-[200x] h-[160px]">
              <img src={item.image} alt="product" className="w-full h-full" />
            </div>
            <p className="text-xl">{item.category}</p>
            <div className="flex gap-1 items-center">
              <IoCheckmarkOutline className="text-[#1246AB]" />
              <span>In stock</span>
            </div>
            <p className="text-[#1246AB]">
              ${item.price} <span className="text-[#333333B3]">/ each</span>
            </p>
            <CountButtons
              setCartItem={setCartItem}
              item={item}
              setIsOpen={setIsOpen}
              ADD="ADD"
              TOCART={"TO CART"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
