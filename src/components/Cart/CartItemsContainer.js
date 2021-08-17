import React, {useContext} from 'react';
import ItemCart from 'context/CartContext';
import CartItems from './CartItems';
import { Link } from 'react-router-dom';


const CartItemsContainer = () => {
    const {itemsCart, price, cleanList} = useContext(ItemCart);

    let styles = itemsCart.length > 0 ? {
      width: '100%',
      height: '100%',
    } : {width: '100%',
       height: '700px'}

    return (
        <div style={styles} className="cart_items">
          {itemsCart.length > 0 ? itemsCart.map(item => <CartItems
          name={item.product.nombre}
          key={item.product.id}
          img={item.product.url}
          category={item.product.category}
          id={item.product.id}
          price={item.product.precio}
          quantity={item.quantity}
          description={item.description}/>) 
        : <h2>No tienes items en el carro. <Link to="/">Agregar</Link> </h2>}
         <h3>Total: ${price()}</h3>
         {itemsCart.length > 0 &&
         <Link to="CartForm" className="btn">Finalize my Purchase</Link>}
         {itemsCart.length > 0 && 
         <button className="btn"onClick={cleanList}>Remove All</button>}
        </div>
    )
}

export default CartItemsContainer;
