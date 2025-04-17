import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navbar = ({showSideBar, cartItem, formData, handleChange}) => {
  return (
    <>
       <TopNav />
       <BottomNav showSideBar={showSideBar} cartItem={cartItem} formData={formData} handleChange={handleChange}/>
    </>

  )
}
export default Navbar

