import React from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({id}) => {

    return(
    <div className="count">
        <div>
        <Link to={`/product-detail/${id}`} style={{ textDecoration: 'none' }}>      
            <button>See More</button>
        </Link>
        </div>
    </div>
    )
}

export default ItemCount;