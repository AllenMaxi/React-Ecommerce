import React, { useContext } from 'react';
import ItemCart from 'context/CartContext';
import { useLocation } from 'react-router';
import { ProductStyles } from 'pages/ProductsStyled';

const CartItems = ({name, description, img, category, id}) => {
    const { removeItem } = useContext(ItemCart);
    let location = useLocation()

    return (
        <ProductStyles>
            <div className="container">
            <h2>{name}</h2>
            <img src={img} alt={name}/>
               <div>
                  {location.pathname === "/Cart" 
                  ? <button className="button"onClick={()=> removeItem(id)}>Remove Item</button>
                  : null}
               </div>
           </div>
        </ProductStyles>
    )
}

export default CartItems;
