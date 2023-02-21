import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link,  useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
export default function CartScreen()  {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      cart: { cartItems },
    } = state;
    const updateCartHandler = (item, quantity) => {

        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity },
          });

         
    }
    const removeItemHandler = (item) => {
        ctxDispatch({
            type: 'CART_REMOVE_ITEM',
            payload:  item 
          });
    }
     
    const checkoutHandler = () => {
        navigate('/signin?redirect=/shipping');
      };
    return(
        <>
        <section className="title">
            <div className="container">
                <Helmet>   Shoping Cart </Helmet>
                 <h2>Shoping Cart</h2> 
                <div className="breadcum">
                    <Link to="/">Home</Link> {' '}
                    <FontAwesomeIcon icon= {faAngleRight} />  {' '}
                     Shoping Cart  
                </div>
            </div>
        </section>
        <section className="product">
              <div className="container product_list">
                <div className="row">
                    <div className="col-md-8">
                        {cartItems.length === 0 ? (
                            <p>
                                Cart is empty.  <Link to="/">Go Shoping</Link>
                            </p>  
                       ) : (
                        <ul className="list-group cartList">
                       { 
                       cartItems.map((item) => (
                        
                        <li className="list-group-item" key={item._id + item.selectedCol} >
                             <div className="row align-items-center">
                                        <div className="col-md-7">
                                            <div className="row align-items-center">
                                                <div className="col cartImg">
                                            <img src={item.selectedImg ? item.selectedImg : item.image} alt={item.name} className="thumbImg" /> {' '} 
                                            </div>
                                            <div className="col"> 
                                            {
                                                item.selectedCol 
                                                ? <Link to={`/product/${item.slug}?color=${item.selectedCol}`} className="cartListLink">{item.name}</Link>
                                                : <Link to={`/product/${item.slug}`} className="cartListLink">{item.name}</Link>
                                            }
                                            {item.selectedCol ? <span className="selectedColor">{item.selectedCol}</span> : null}
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <button onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        } disabled={item.quantity === 1}>
                                            <FontAwesomeIcon icon={faMinusSquare} /> 
                                            </button>{' '}
                                            <span className="thisCount">{item.quantity}</span>
                                            <button onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}>
                                            <FontAwesomeIcon icon={faPlusSquare} />
                                            </button> 
                                            
                                        </div>
                                        <div className="col-md-2 cartListPrice text-center"> <span>Price </span> {item.offerPrice}</div>
                                        <div className="col-md-1">
                                        <button className="deletCartItem" onClick={() => removeItemHandler(item)}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                            </button> </div>
                                    </div>
                        </li>
                    )) 
                    } 
                    </ul>
                       
                       ) }
                     
                    </div>
                    <div className="col-md-4">
                    <ul className="list-group cartList">
                        <li className="list-group-item">Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : {' '} 
                    {cartItems.reduce((a, c) => a + c.offerPrice * c.quantity, 0)}</li>
                    <li className="list-group-item text-center"> 
                    <button type="button" onClick={checkoutHandler} disabled={cartItems.length === 0} className="proccedtoCheckout buy">
                      Proceed to Checkout
                    </button>
                      </li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}