import './App.css';
import NavBar from './components/Navbar/NavBar';
import {  BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App()  {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = "/" element={<ItemListContainer />} />
          <Route path= "/category/:categoryId" element = {<ItemListContainer />} />
          <Route path = "/item/:itemId" element={<ItemDetailContainer />} />
          <Route path = "*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
