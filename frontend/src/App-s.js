import React from 'react';
import { HomeScreen } from "./screens/home-s"; 
import { Link } from 'react-router-dom'; 

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ProductList } from './screens/productList-s';
import { ProductDetails } from './screens/productDetails-s';
import { Header } from './screens/header-s';
import { Search } from './screens/search-s';
 function App() {
  return (
    <div>
      <BrowserRouter>
      <header>
        <Header></Header>
      </header>
      
      <Routes basename={'/teknobyte'}>
        <Route path={`${process.env.PUBLIC_URL}/`} element ={<HomeScreen/>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/category/:id`} element ={<ProductList/>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/product/:slug`} element ={<ProductDetails/>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/search`} element ={ <Search /> }></Route>
      </Routes>
      
      
      <footer className="copyright">
		<div className="container">
		<div className="row">
			<div className="col-md-6">
				Copyright © 2020 <strong>Teknobyte Portable Electronics</strong> All rights reserved.
			</div>
			<div className="col-md-6 text-end">
				<Link to="#">Terms &amp; Conditions</Link>
				<Link to="#">Privacy Policy</Link>
				
			</div>
			</div>
			</div>
		</footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
