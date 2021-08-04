import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const ItemDetailCount = ({initial, stock, onAdd, press, setPress}) => {
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

const handleOnAdd = () => {
    onAdd(contador);
    setPress(true)
}
  
    return (
     <div>
        <div>
     <button onClick={handleAdd}>+</button>
     <label>{contador}</label>
     <button onClick={handleRemove}>-</button>
     <div>
    {press ? <Link to="/Cart"><button>Finish my purchase</button></Link>
    :<button onClick={handleOnAdd}>Add to Cart</button>}
     </div>
       </div>
    </div>
    )
}

export default ItemDetailCount
