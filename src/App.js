import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate  } from 'react-router-dom';
import Home from './components/Home';
import Products from './pages/Products'
import { useState } from 'react';
import './App.css';

function App() {
  const [catagory, setCatagory] = useState();
  useEffect(() =>{
    let latestCategory = localStorage.getItem('latestCategory');
    if(latestCategory!=='undefined'){
      setCatagory(latestCategory);
    }
  },[]);
  const navigate = useNavigate();
  function linkTo(products){
    setCatagory(products)
    navigate(`/${products}`)
  }
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li onClick={()=>linkTo('jewelery')}>Jeweleries</li>
          <li onClick={()=>linkTo('electronics')}>Electronics</li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewelery" element={<Products catagory={catagory}/>} />
        <Route path="/electronics" element={<Products catagory={catagory}/>} />
      </Routes>
    </div >
  );
}

export default App;
