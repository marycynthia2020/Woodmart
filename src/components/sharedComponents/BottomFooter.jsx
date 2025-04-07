import cards from "/images/cards1.png"
const BottomFooter = () => {
  return (
    <div className="w-fulltext-[#767676] ">
        <hr />
        <div className="px-2 w-full 2xl:w-[80vw] mx-auto py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-center text-sm lg:text-[16px] "><span className="font-bold">WOODMART</span> © 2025 CREATED BY <span className="text-red-800">X</span><span className="font-bold">TEMOS STUDIO</span>. PREMIUM E-COMMERCE SOLUTIONS.</p>
            <img src={cards} alt="ATM Cards" width={225}/>
        </div>
    </div>
  )
}

export default BottomFooter