import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUS from './pages/AboutUS'
import AllCategories from './pages/AllCategories'
import ExpertAdvice from './pages/ExpertAdvice'
import Promotions from './pages/Promotions'
import Services from './pages/Services'
import TrackOrder from './pages/TrackOrder'
import Navbar from './components/sharedComponents/Navbar'
import NotFound from './components/NotFound'
import PaymentAndDelivery from './pages/PaymentAndDelivery'
import Footer from './components/sharedComponents/Footer'
import ShoppingCart from './components/ShoppingCart'
import { useState } from 'react'

function App() {
  const[isOpen, setIsOpen] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [formData, setFormData] = useState({
    searchProduct: "",
})

const handleChange = (e)=>
    setFormData(prev => {
        return {...prev, [e.target.name]: e.target.value}
    })

 const showSideBar = ()=>{
  setIsOpen((prev) => !prev)
 }
  return (
    <div className='overflow-x-hidden relative'>
      {isOpen?  <ShoppingCart cartItem={cartItem} setCartItem={setCartItem} />:null}
    <Navbar showSideBar={showSideBar} cartItem={cartItem} formData={formData} handleChange={handleChange}/>
    <Routes>
      <Route path='/' element={<Home setCartItem={setCartItem} setIsOpen={setIsOpen} formData={formData}/>} />
      <Route path='/aboutus' element={<AboutUS />} />
      <Route path='/allcategories' element={<AllCategories />} />
      <Route path='/expertadvice' element={<ExpertAdvice />} />
      <Route path='/paymentanddelivery' element={<PaymentAndDelivery />} />
      <Route path='/promotions' element={<Promotions />} />
      <Route path='/services' element={<Services />} />
      <Route path='/trackorder' element={<TrackOrder />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
   
    <Footer />
    </div>
  )
}

export default App
