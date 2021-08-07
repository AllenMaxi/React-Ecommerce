import React, { useContext } from 'react';
import ItemCart from 'context/CartContext';
import { useLocation } from 'react-router';

const CartItems = ({name, description, img, category, id}) => {
    const { removeItem } = useContext(ItemCart);
    let location = useLocation()

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
               <div>
                  {location.pathname === "/Cart" 
                  ? <button onClick={()=> removeItem(id)}>Remove Item</button>
                  : null}
               </div>
        </div>
    )
}

export default CartItems;
