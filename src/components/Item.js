import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({name, img, description, price, id}) => {

    return(
      
        <div className="details" >
      <div className="item-name">
         <p>{id}</p> 
        <h2>{name}</h2>
      </div>
      <Link to={`/product-detail/${id}`} style={{ textDecoration: 'none' }}>
     <div className="item-img">
       <img src={img} alt={name}/> 
     </div>
      </Link>
     <div>
         <h3>{description}</h3>
         <p><b>${price}</b></p>
     </div>
      </div>
    )
}

export default Item;