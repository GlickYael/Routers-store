import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './pages/Products'
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/jewelery'>Jeweleries</Link></li>
          <li><Link to='/electronics'>Electronics</Link></li>
          <li><Link to='/books'>Books</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewelery" element={<Products catagory='jewelery' url='https://fakestoreapi.com/products/category/'/>} />
        <Route path="/electronics" element={<Products catagory='electronics' url='https://fakestoreapi.com/products/category/'/>} />
        <Route path="/books" element={<Products catagory='books' url='http://localhost:8080/'/>} />
      </Routes>
    </div >
  );
}

export default App;
