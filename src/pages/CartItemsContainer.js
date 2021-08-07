import React, {useContext} from 'react';
import ItemCart from 'context/CartContext';
import CartItems from 'components/Cart/CartItems';
import { Link } from 'react-router-dom';

const CartItemsContainer = () => {
    const {itemsCart, price} = useContext(ItemCart);
    console.log(itemsCart)
    return (
        <div>
          {itemsCart.length > 0 ? itemsCart.map(item => <CartItems
          name={item.product.nombre}
          key={item.product.id}
          img={item.product.url}
          category={item.product.category}
          id={item.product.id}
          description={item.description}/>) 
        : <h2>No tienes items en el carro. <Link to="/">Agregar</Link> </h2>}
         
         <h3>Total: {price()}</h3>
        </div>
    )
}

export default CartItemsContainer;
