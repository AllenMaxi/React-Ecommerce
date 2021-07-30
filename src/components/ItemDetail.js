import React, { useState, useContext } from 'react';
import { ItemsDetail } from './styles/ItemsDetail';
import { BounceInDiv } from 'animations/BouncyDiv';
import ItemDetailCount from './ItemDetailCount';
import ItemCart from 'context/CartContext';

const ItemDetail = ({name, price, img, description, product}) => {
const [press, setPress] = useState(false);
const {itemsCart, setCart} = useContext(ItemCart);


  const handleProduct = () => {
    for (let i = 0; i < itemsCart.length; i++) {
      if(itemsCart[i].id === product.id){
       return
      }  
    }
  setCart(product)
  setPress(true);
}

console.log(itemsCart);

    return(
        <ItemsDetail>
      <h2><span>The best products to start your healthy life</span></h2>
     <div className="container">
       <h2>{name}</h2>
       <BounceInDiv>
       <img src={`../images/${img}`} alt={name}/>
       </BounceInDiv>
       <div>
         <p>{description}</p>
         <h3>${price}</h3>
       </div>
       <ItemDetailCount initial={1} stock={9} onAdd={handleProduct} press={press}/>
     </div>
      </ItemsDetail>
    )
}

export default ItemDetail;