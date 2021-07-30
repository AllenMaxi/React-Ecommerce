import React, {useState, useContext, useEffect} from 'react';
import CartWidget from './CartWidget';
import ReorderIcon from "@material-ui/icons/Reorder"
import { Link } from 'react-router-dom';
import "../App.css";
import ItemCart from 'context/CartContext';

function NavBar() {
   const [showLinks, setShowLinks] = useState(false);
   const {quantity, itemsCart, setQuantity} = useContext(ItemCart);
   
   const cursor = {
      cursor: "pointer",
   };

   useEffect(() => {
      setQuantity(itemsCart.length + 1)
    }, [itemsCart])
   
   return (
      <div className="Navbar">
         <div className="leftSide">
            <div className="links" id={showLinks ? "hidden"
         : ""}>
            <Link to="/">Home</Link>
            <Link to="/category/Celiacs">Celiacs</Link>
            <Link to="/category/Vegans">Vegans</Link>
            <Link to="/contact">Contact</Link>
            </div>
         <button onClick={() => setShowLinks(!showLinks)} style={cursor}>
            <ReorderIcon/>
         </button>
         </div>
         <div className="rightSide">
            <div className="icons">
              <Link to="/" style={{ textDecoration: 'none' }}> 
              <p>Healthy <span>LIFE</span> 🍚</p></Link>
            </div>
         <p>{quantity - 1}</p><Link to="/Cart"><CartWidget/></Link>
         </div>
      </div>
   )
}

export default NavBar;

