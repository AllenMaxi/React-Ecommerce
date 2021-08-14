import React from 'react';


const Item = ({name, img, price}) => {

    return(
  <div className="details">
      <div className="item-name container">
        <h2>{name}</h2>
      </div>
     <div className="item-img">
       <img src={img} alt={name}/> 
     </div>
     <div>
         <h3><b>${price}</b></h3>
     </div>
  </div>
    )
}

export default Item;