import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../functions/firebaseService';
import "../../spinner/Spinner.css";

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
  }, [id]) 

console.log(product)
    return(
        <div className="center" style={{width: '100%', height: '500px'}}>
            {(product.length === 0) ? 
            <div className="lds-roller"><div></div><div></div><div></div><div></div></div>
            :<ItemDetail name={product[0].nombre}
            img={product[0].url} 
            price={product[0].precio}
            product={product[0]}/>}
         </div>
         
    )
  
}