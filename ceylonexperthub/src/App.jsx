import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductCategory from "./components/product/product";
import Sign_up from "./components/sign_up/sign_up";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./components/register/register";
import Sellanitem from "./components/sellAnItem"
import Productlist from './components/cproductlist/productlist';
import Cart from './components/cart/cart'

function App() {
  return (
  
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Sign_up />} />
          <Route path="/productCategory" element={<ProductCategory />} />
          <Route path="/register" element={<Register />} />
          <Route path="/selleranitem" element={<Sellanitem/>} />
          <Route path="/productlist" element={<Productlist/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    
  
  );
}

export default App;


