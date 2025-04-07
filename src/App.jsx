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

function App() {

  return (
    <div className='overflow-x-hidden relative'>
       <ShoppingCart />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
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
