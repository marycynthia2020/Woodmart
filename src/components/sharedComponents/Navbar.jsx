import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navbar = ({showSideBar}) => {
  return (
    <>
       <TopNav />
       <BottomNav showSideBar={showSideBar}/>
    </>

  )
}
export default Navbar

