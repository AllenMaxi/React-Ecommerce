import React, { useState } from 'react';
import { ItemsDetail } from './styles/ItemsDetail';
import { BounceInDiv } from 'animations/BouncyDiv';
import ItemDetailCount from './ItemDetailCount';

const ItemDetail = ({name, price, img, description, product}) => {
const [productCart, setProductCart] = useState([]);
const [press, setPress] = useState(false);

  const handleProduct = () => {
    setProductCart(product)
    setPress(true);
}

console.log(productCart)
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