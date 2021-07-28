import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const ItemDetailCount = ({initial, stock, onAdd, press}) => {
 const [contador, setContador] = useState(initial)
 const [stockProduct, setStockProduct] = useState(stock - 1)

const handleAdd = () => {
   if(contador<stock ) { 
       setContador(contador + 1)
       setStockProduct(stockProduct - 1)
    } 
} 
const handleRemove = () => {
    if(contador>initial ) { 
        setContador(contador - 1)
        }
    
} 
console.log(contador)
console.log(stockProduct)
    return (
     <div>
        <div>
     <button onClick={handleAdd}>+</button>
     <label>{contador}</label>
     <button onClick={handleRemove}>-</button>
     <div>
    {press ? <Link to="/Cart"><button>Finish my purchase</button></Link>
    :<button onClick={onAdd}>Add to Cart</button>}
     </div>
       </div>
    </div>
    )
}

export default ItemDetailCount
