import React, {useContext} from 'react';
import ItemCart from 'context/CartContext';
import CartItems from 'components/Cart/CartItems';

const CartItemsContainer = () => {
    const {itemsCart} = useContext(ItemCart);

    return (
        <div>
          {itemsCart.map(item => <CartItems
          name={item.name}
          key={item.id}
          img={item.img}
          category={item.category}
          description={item.description}/>)}  
        </div>
    )
}

export default CartItemsContainer;
