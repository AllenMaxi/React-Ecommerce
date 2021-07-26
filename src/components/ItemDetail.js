import React from 'react';
import { ItemsDetail } from './styles/ItemsDetail';
import { BounceInDiv } from 'animations/BouncyDiv';

const ItemDetail = ({name, price, img, description}) => {

    return(
        <ItemsDetail>
      <h2><span>The best products to start your healthy life</span></h2>
     <div className="container">
       <h2>{name}</h2>
       <BounceInDiv>
       <img src={`../${img}`} alt={name}/>
       </BounceInDiv>
       <div>
         <p>{description}</p>
         <h3>${price}</h3>
       </div>
     </div>
      </ItemsDetail>
    )
}

export default ItemDetail;