import { FaEnvelope } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className='py-4 px-2 w-full bg-[#1246AB] mb-8'>
        <div className="2xl:w-[80vw] mx-auto text-white flex flex-col lg:flex-row lg:items-center gap-6 lg:justify-between ">
        <div className="flex gap-6 items-center" >
            <FaEnvelope className="text-white text-5xl"/>
            <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold ">Sign Up To Us Newsletter</h2>
            <p>Be the First To Know. Signup to the Newsletter</p>
            </div>
        </div>
        <form action="" className="flex flex-col sm:flex-row items-center gap-2">
            <input type="text" placeholder="enter email address" className="p-2 lg:pr-20 " />
            <button className="bg-white p-4 py-2 text-black  ">Sign Up</button>
        </form>
        </div>
        
    </div>
  )
}

export default NewsLetter
