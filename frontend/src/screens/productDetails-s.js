import data from "../data"
import { useEffect, useReducer, useState } from "react";
import { Link,  useParams, useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, product: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
export const ProductDetails = () => { 
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
   const queryParams = new URLSearchParams(window.location.search)
const colorPro = queryParams.get("color");
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });
  const proCatId = product._id;
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        //const result = await axios.get(`/api/products/slug/${slug}`);
        const result = data.products.find(prod => prod.slug === slug)
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
     // const resultCategory = await axios.get('/api/categories');
      setCategory(data.categories);
    };
    fetchData();
  }, [slug]);
    return(
        
          loading ? <div>Loading...</div>
          : error? <div>{error}</div>
          : <div> 
            <section className="title">
      {category.filter((byCat) => byCat._id === proCatId).map((pro) => (
          
          <div className="container">
          <h2>{pro.categoryName}</h2>
          <div className="breadcum"><Link to="#">Home</Link> <i className="fa fa-angle-right" aria-hidden="true"></i>   {pro.categoryName} </div> 
          </div> 
      ))
      }   </section>
            <section className="product">
              <div className="container product_list">
                <div className="row">
                  <div className="col-md-5">
                    <div className="gallery text-center">
                      {colorPro ? product.color.filter((color) => color.colorName === colorPro).map((colorF) => (
                     <img src = {colorF.gallery} alt= {product.name} /> 
                     ))
                      : <img src = {product.imageBig} alt= {product.name} />} 
                  </div>
                  </div>
                  <div className="col-md-7">
                  <div  className="proDetails">
			<div className="product-title">
        <Helmet> <title>{product.name} </title></Helmet>
				<h1>{product.name} </h1>  
			</div>
			<div className="specification">
      <ul>
        {Object.keys(product.Specification).map((key) => 
          <li><span>{key}</span> : {product.Specification[key]} </li>
          )}
          </ul>
          
            {product.color 
            ? 
            <ul>
          <li> 
            <span>Color :</span>
          <div class="colorOpt">
            <div className="row">
              {product.color.map((colorOpt) => (
                 
                <div onClick={() => setActive(colorOpt)} className={`col ${colorPro === colorOpt.colorName ? 'active' : active === colorOpt && 'active'}`}> <div  onClick={() => navigate(`?color=${colorOpt.colorName}`)} ><p>{colorOpt.colorName}</p>
                <img src={colorOpt.colorImg} alt={colorOpt.colorName} />     </div>    </div>
                
              ))
              
              }
          </div>
          </div>  
          </li></ul>
          :null
          }
       
     
			</div>
			<div className="mt20"><button type="button"  className="buy">Buy Now</button></div>
			</div>
                  </div>
                </div>
              </div>
            </section>
            </div>
        
    )
}