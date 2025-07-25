import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePAge';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<HomePage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
