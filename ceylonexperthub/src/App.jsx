import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductCategory from "./components/product/product";
import Sign_up from "./components/sign_up/sign_up";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./components/register/register";
import Sellanitem from "./components/sellAnItem"

function App() {
  return (
  
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Sign_up />} />
          <Route path="/productCategory" element={<ProductCategory />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
        <Sellanitem/>
      </div>
    </Router>
    
  
  );
}

export default App;


