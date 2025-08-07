import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePAge';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductSearchPage from './pages/ProductSearchPage';
import ProductCategoryPage from './pages/ProductCategoryPage';
import ProductPage from './pages/ProductPage';
import ProductCartPage from './pages/ProductCartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderPage from './pages/OrderPage';
import Account from './pages/Account';
import PageNotFound from './pages/PageNotFound';

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/search' element={<ProductSearchPage/>}/>
        <Route path='/category' element={<ProductCategoryPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/product-cart' element={<ProductCartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/order' element={<OrderPage/>}/>
        <Route path='/account/*' element={<Account/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  )
}

export default App
