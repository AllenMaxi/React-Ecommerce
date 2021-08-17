import React, { useContext } from 'react';
import ItemCart from 'context/CartContext';
import { useLocation } from 'react-router';
import "./CartStyles.css";

const CartItems = ({name, img, category, id, quantity, price}) => {
    const { removeItem } = useContext(ItemCart);
    let location = useLocation()
    let totalPrice =  quantity * price
    return (
        <div className="items_Container">
            <div>
            <div className="box grid-responsive">
              <div>
                <h2>{name}</h2>
                <img src={img} alt={name} />
                <p> {`Quantity: ${quantity}`} </p>
                <p>{`Total Price: $${totalPrice}`}</p>
                 <h3>{category}</h3>
              </div>
            </div>
               <div>
                  {location.pathname === "/Cart" 
                  ? <button className="button"onClick={()=> removeItem(id)}>Remove Item</button>
                  : null}
               </div>
           </div>
        </div>
    )
}

export default CartItems;
