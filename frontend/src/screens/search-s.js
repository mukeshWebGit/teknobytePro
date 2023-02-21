import data from '../data';
import { useEffect, useReducer } from "react";
import { Link, useSearchParams } from "react-router-dom";
import logger from "use-reducer-logger";
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
  const bySearch = (search) => (searchKey) => 
  searchKey.name.toLowerCase().includes((search || '').toLowerCase());
export const Search = () => {
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
      }); 
    let [searchParams] = useSearchParams();
    const serchKey = searchParams.get('key');
console.log(serchKey);
    useEffect(() => { 
        const fetchData = async () => {
          dispatch({ type: 'FETCH_REQUEST' });
          
        try {
         // const result = await axios.get('/api/products');
          dispatch({ type: 'FETCH_SUCCESS', payload: data.products });
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: err.message });
        }  
        }; 
        fetchData();
      }, []);  

    return (
        <section className="product"> 
        <div className="container product_list">
       
        <div className="row text-center">
{loading? (
      <div>Loading...</div>
    ): error ? (
      <div>{Error}</div>
    ) : !products.filter(bySearch(serchKey)) ? (
        <div> Please</div>
    )
    
    : (
      products.filter(bySearch(serchKey)).map((product) => (
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
        
    )
}