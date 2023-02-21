import { Link } from "react-router-dom"
export const Products = (props) => {
   const {product} = props;
    return(
        <>
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
        </>
    )
}