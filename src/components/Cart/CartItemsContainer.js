import React, {useContext} from 'react';
import ItemCart from 'context/CartContext';
import CartItems from './CartItems';
import { Link } from 'react-router-dom';


const CartItemsContainer = () => {
    const {itemsCart, price} = useContext(ItemCart);

    return (
        <div style={{width: '100%', height: '500px'}}>
          {itemsCart.length > 0 ? itemsCart.map(item => <CartItems
          name={item.product.nombre}
          key={item.product.id}
          img={item.product.url}
          category={item.product.category}
          id={item.product.id}
          description={item.description}/>) 
        : <h2>No tienes items en el carro. <Link to="/">Agregar</Link> </h2>}
         <h3>Total: ${price()}</h3>
         {itemsCart.length > 0 &&
         <Link to="CartForm" className="btn">Finalize my Purchase</Link>}
        </div>
    )
}

export default CartItemsContainer;
