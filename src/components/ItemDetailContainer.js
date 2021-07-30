import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { getProducts } from './functions/getProduct';
import { useParams } from 'react-router-dom';


export default  function ItemDetailContainer() {
const [product, setProduct] = useState([])
let {id} = useParams();


  useEffect(() => {
    if(id === undefined){
        getProducts()
        .then(res => setProduct(res))
     }else{
        getProducts()
        .then(res => setProduct(res.filter(item => item.id === Number(id))))
     }
  }, [id]) 

    return(
        <div>
            {(product.length === 0) ? "Loading..." 
            :<ItemDetail name={product[0].name}
            img={product[0].img} 
            price={product[0].price}
            description={product[0].description}
            product={product[0]}/>}
            
         </div>
         
    )
  
}
