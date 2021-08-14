import React, { useState, useContext } from 'react';
import ItemDetailCount from '../ItemCount/ItemDetailCount';
import ItemCart from 'context/CartContext';

const ItemDetail = ({name, price, img, description, product}) => {
const [press, setPress] = useState(false);
const {itemsCart, setCart} = useContext(ItemCart);


  const handleProduct = (count) => {
  setCart({product: product, quantity: count})
}
console.log(itemsCart)
    return(
         <div>
      <h2><span>The best products to start your healthy life</span></h2>
          <div className="container">
             <h2>{name}</h2>
           <img src={img} alt={name}/>
          <div>
            <p>{description}</p>
            <h3>${price}</h3>
          </div>
       <ItemDetailCount initial={1} stock={9} onAdd={handleProduct} press={press} setPress={setPress}/>
          </div>
          </div>
    )
}

export default ItemDetail;