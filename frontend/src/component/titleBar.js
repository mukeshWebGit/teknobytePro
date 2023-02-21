import { Link } from "react-router-dom";

export const TitleBar = (props) => {
    const {category, params} = props;
return(
    <section className="title">
      {category.filter((byCat) => byCat._id === params.id
      ).map((pro) => (
          
          <div className="container">
          <h2>{pro.categoryName}</h2>
          <div className="breadcum"><Link to="#">Home</Link> <i className="fa fa-angle-right" aria-hidden="true"></i>   {pro.categoryName} </div> 
          </div> 
      ))
      }   </section>
)

}