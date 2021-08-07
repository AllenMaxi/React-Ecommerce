import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from './functions/firebaseService';
import "./styles/Spinner.css";

export default  function ItemDetailContainer() {
const [product, setProduct] = useState([])

let {id} = useParams();

  useEffect(() => {
   const db = getFirestore()
     if(id === undefined) {
      db.collection("Items").get()
      .then((resp) =>  setProduct(resp.docs.map(item => ({...item.data(), id: item.id })) ))
     }
    if(db.collection("Items").doc(id).get()){
    db.collection("Items").doc(id).get() 
    .then((resp) =>  setProduct([ {id: resp.id, ...resp.data()}]))
    }
  }, []) 
console.log(product)
    return(
        <div className="center">
            {(product.length === 0) ? 
            <div class="lds-roller"><div></div><div></div><div></div><div></div></div>
            :<ItemDetail name={product[0].nombre}
            img={product[0].url} 
            price={product[0].precio}
            product={product[0]}/>}
         </div>
         
    )
  
}
