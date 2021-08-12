import React from 'react';
import { FlipInYDiv } from 'animations/FlipInYDiv';

const Item = ({name, img, price}) => {

    return(
      
  <div className="details">
      <div className="item-name container">
        <h2>{name}</h2>
      </div>
     <div className="item-img">
     <FlipInYDiv>
       <img src={img} alt={name}/> 
       </FlipInYDiv>
     </div>
     <div>
         <h3><b>${price}</b></h3>
     </div>
  </div>
  
    )
}

export default Item;