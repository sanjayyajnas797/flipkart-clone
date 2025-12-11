import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/Home/Home'
import Login from './components/Loginmodel/Loginmodel'
import Cart from './cart/cart'
import Navbar from './components/Navbar'
import {Provider} from 'react-redux'
import store from './slice/store'
import Protect from './pages/protected'
import Mobile from './Home/mobile'
import Productdetail from './productdetails/productdetail'
import BuyPage from './cart/buypage'
import Payment from './cart/paymentpage'
function App(){
  return(
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route element={<Protect/>}>
          <Route path='/home' element={<Home/>}></Route>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/mobile' element={<Mobile/>}></Route>
          <Route path='/product/:id' element={<Productdetail/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/buy' element={<BuyPage/>}></Route>
          <Route path='payment' element={<Payment/>}></Route>
        </Routes>
    </BrowserRouter>
    </Provider>
  )
}
export default App