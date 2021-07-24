import React, { useState } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
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
     <h4>ItemCount</h4>
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