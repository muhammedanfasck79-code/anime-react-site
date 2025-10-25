// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SecondPage from './SecondPage';
import App from './App';

// import slidebarimage from "./slidebarimage"


// import SearchComponent from "./SearchComponent"

import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Store';
import ProductPage from './ProductPage';
import PostalPage from './PostalPage';
import Postal from './Postal';
import Catfact from './Catfact';
import Github from './Github';
import About from './About';
import Season from './Season';

// import { NavbarCollapse } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
   
      <Route path='/' element={<App/>}/>
      <Route path='/github' element={<Github />}/>
      <Route path='/second' element={<SecondPage/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/product/:id' element={<ProductPage/>}/>
      <Route path='./PostalPage' element={<PostalPage/>}/>
      <Route path='/postal' element={<Postal/>}/>
      <Route path='/Catfact' element={<Catfact/>}/>
      {/* <Route path='/github' element={<Github />}/> */}
      <Route path='/About' element={<About />}/>
      <Route path='/Season' element={<Season />}/>

      {/* <Route path='/Navbar2' element={<NavbarCollapse/>}/> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);