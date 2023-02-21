import data from '../data';
import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { Link, useNavigate, createSearchParams } from "react-router-dom"

export const Header = () => {
    const [category, setCategory] = useState([]); 
    const [searchField, setSearchField] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
      setSearchField(e.target.value.toLowerCase());
    };
     
      function handleSubmit(e, res) {
        e.preventDefault();
        navigate({
          pathname: `${process.env.PUBLIC_URL}/search`,
          search: createSearchParams({
              key: searchField
          }).toString()
      });
        //navigate(`search?key=${searchField}`);
      }
      
  useEffect(() => {
    const fetchData = async () => { 
      
      setCategory(data.categories);
    };
    fetchData();
  },[]); 
    return(
        <div className="container">
        <Row className='align-items-center'>
            <Col md={3}>   
              <Link to={`${process.env.PUBLIC_URL}/`}> <img src="/images/logo.png" alt="teknobyte" className="logo" />  </Link> 
            </Col>
            <Col md={9}> 
            <div className="MenuBg">
      <ul className="MainMenu list-unstyled align-items-center justify-content-end mb-0">
        <li><Link to={`${process.env.PUBLIC_URL}/`}>Home</Link></li>
        <li className="dropdown">
          <Link to="#">Products <span className="caret"></span></Link>
          <ul className="sub-menu list-unstyled m-0">
            {category.map((cat) => (
                <li key={cat._id}><Link to={`${process.env.PUBLIC_URL}/category/${cat._id}`}>{cat.categoryName}</Link></li>
            ))} 
           </ul>
          
        </li>
        <li><Link to="#">About Us</Link></li>
        <li><Link to="#">Contact Us</Link></li>
        <li className="searchBg"><div className="searchFild"><form onSubmit={handleSubmit}><input type="text" placeholder="search" className="search" onChange={handleChange}/> <button type="submit" className="searchBtn"><img src="../images/search.png" alt="search"/></button> </form></div></li>
        
      </ul>
     
    </div>
            </Col>
        </Row>
     </div>
    )
}