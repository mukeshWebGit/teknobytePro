import { useContext } from "react";
import { Link } from "react-router-dom"
import { Store } from "../Store";
export const Products = (props) => {
   const {product} = props;
   const selectedCol = product.pColor ? product.pColor : null ; 
   const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      cart: { cartItems },
    } = state;
    const addToCartHandler = (item) => {
        const existItem = cartItems.find((x) => x._id === product._id && x.selectedCol === selectedCol); 
        console.log(selectedCol);
        const quantity = existItem ? existItem.quantity + 1 : 1; 
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity, selectedCol },
          }); 
         
    }
    return(
        <>
        <div className="productBg"> 
        <Link to={product.pColor ? `/product/${product.slug}?color=${product.pColor}` : `/product/${product.slug}`}>
        <h4>{product.name}</h4>
            <img src={product.image} className="currentImg" alt={product.name} />  
            </Link>
            </div>
            <div className="productDes text-center">
                <p className="newPrice">Offer Price: {product.offerPrice}</p>
                <p className="oldPrice">MRP:  {product.price}</p>
                <button type="button" className="btnBuy" onClick={() => addToCartHandler(product)} >Add to Cart</button>
            </div> 
        </>
    )
}