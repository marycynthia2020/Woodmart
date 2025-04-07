import BlueButton from "../btns/BlueButton"
import tube from "/images/bathtube1.jpg"

const Hero = () => {
  return (
    <div className=' lg:h-[400px] bg-[#1b5bb4] text-white w-full px-2 mb-10 lg:mb-64 ' >
        <div className=' w-full 2xl:w-[80vw] mx-auto grid lg:grid-cols-12 lg:grid-rows-12 gap-4'>
            <div className='lg:col-span-8 lg:row-span-12 lg:grid lg:grid-cols-6'>
                <div className='col-span-3 px-4  lg:px-10 py-2  bg-[#d1bda5]  flex flex-col gap-6 justify-center'>
                    <p>From <span className="text-[#1b5bb4] text-lg">the best </span>designers</p>
                    <h1 className="text-5xl font-bold leading-snug w-4/5">Check Out Our Expert Advice</h1>
                    <BlueButton title="OUR SERVICES"/>
                </div>
                <div className='col-span-3'>
                    <img src={tube} alt="bath-tube" className="w-[100%]"/>
                </div>
            </div>
            <div className='lg:col-span-4 lg:row-span-7 px-4 lg:px-10 py-6  flex flex-col gap-4 bg-carpenter bg-cover'>
                <h2 className="text-4xl font-bold">Our Services</h2>
                <p className="text-lg leading-snug w-3/5">Discover all the ways to get your product</p>
                <BlueButton title="VIEW MORE"/>
            </div>
            <div  className=' lg:col-span-4 row-span-5 px-4 lg:px-10 py-6  flex flex-col gap-4 bg-cart bg-cover bg-no-repeat bg-center'>
            <h2 className="text-4xl font-bold">Free Shipping</h2>
            <p className="text-lg leading-snug w-3/5">Free shippping on orders of $100 or more</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
