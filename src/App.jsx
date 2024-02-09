import './App.css'
import NavBar from './components/Navbar/NavBar'
import {  BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemsListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import Checkout from "./components/Checkout/Checkout"
import { NotificationProvider } from './components/Notification/Notification'

function App()  {
  return (
    <div className='App'>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavBar />
              <Routes>
                <Route path = "/" element={<ItemListContainer />} />
                <Route path= "/category/:categoryId" element = {<ItemListContainer />} />
                <Route path = "/item/:itemId" element={<ItemDetailContainer />} />
                <Route path= "/cart" element= {<Cart />}/>
                <Route path= "/checkout" element= {<Checkout />} />
                <Route path = "*" element={<h1>404 NOT FOUND</h1>} />
              </Routes>
          </CartProvider>
        </NotificationProvider>  
      </BrowserRouter>
    </div>
  )
}
export default App;
