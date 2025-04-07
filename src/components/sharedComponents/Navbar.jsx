import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navbar = ({onShow}) => {
  return (
    <>
       <TopNav />
       <BottomNav onClick={onShow}/>
    </>

  )
}
export default Navbar

