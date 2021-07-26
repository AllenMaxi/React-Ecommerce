import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({initial, stock, onAdd, id}) => {
    const [contador, setContador] = useState(initial)

    const handleAdd = () => {
if(contador<stock ) { 
setContador(contador + 1)
} 
} 
const handleRemove = () => {
    if(contador>initial ) { 
        setContador(contador - 1)
        }
    
} 
const handlerOnAdd = () => {
    onAdd(contador);
}
    return(
        <>
    <div className="count">
        <div>
 <Link to={`/product-detail/${id}`} style={{ textDecoration: 'none' }}>      
    <button>See More</button>
 </Link>
        </div>
           <div>
     <button onClick={handleAdd}>+</button>
     <label>{contador}</label>
     <button onClick={handleRemove}>-</button>
     <div>
     <button onClick={handlerOnAdd}>Add to Cart</button>
     </div>
           </div>
        </div>

        </>
    )
}

export default ItemCount;