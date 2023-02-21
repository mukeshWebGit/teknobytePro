import { useEffect, useReducer, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import data from '../data';
import logger from 'use-reducer-logger';  

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const ProductList = () => { 
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
      }); 
      const [category, setCategory] = useState([]);
        useEffect(() => {
          const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            
          try {
           // const result = await axios.get('/api/products');
            dispatch({ type: 'FETCH_SUCCESS', payload: data.products });
          } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: err.message });
          } 
          //const resultCategory = await axios.get('/api/categories');
          setCategory(data.categories);
          }; 
          fetchData();
        }, []);  
      const params = useParams();  
    return(
      <> 
      <section className="title">
      {category.filter((byCat) => byCat._id === params.id).map((pro) => (
          <div className="container">
          <h2>{pro.categoryName}</h2>
          <Helmet> <title>{pro.categoryName} </title></Helmet>
          <div className="breadcum"><Link to="#">Home</Link> <i className="fa fa-angle-right" aria-hidden="true"></i>   {pro.categoryName} </div> 
          </div> 
      ))
      }   </section>
        <section className="product"> 
        <div className="container product_list">
       
        <div className="row text-center">
{loading? (
      <div>Loading...</div>
    ): error ? (
      <div>{Error}</div>
    ) : (
      products.filter((byCat) => byCat._id === params.id).map((product) => (
             <div className="col-md-4">
                <div className="productLists">
                <div className="productBg"> 
                <Link to={product.pColor ? `${process.env.PUBLIC_URL}/product/${product.slug}?color=${product.pColor}` : `${process.env.PUBLIC_URL}/product/${product.slug}`}>
            <h4>{product.name}</h4>
                <img src={product.image} className="currentImg" alt={product.name} />  
                </Link>
            </div>
            <div className="productDes text-center">
                <p className="newPrice">Offer Price: {product.offerPrice}</p>
                <p className="oldPrice">MRP:  {product.price}</p>
                
                <Link to="#" className="btnBuy">Add to cart</Link>
            </div> 
                </div>   
            </div>   
                
             
        ))
        )}
      </div>
      </div>
      </section>
      </>
    )
};