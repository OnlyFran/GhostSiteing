import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/Navbar/NavBar'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/CartWidget/Cart'
import CartContextProvider from './context/CartContext'

function App() {
  
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route index path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategory' element={<ItemListContainer />} />
            <Route path='/detalle/:idDetail' element={<ItemDetailContainer />} />
            <Route path='/notFound' element={<NotFound />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={ <Navigate to='NotFound' /> } />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
