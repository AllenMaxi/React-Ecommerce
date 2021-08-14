import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../functions/firebaseService';
import { SpinnerRoundFilled } from 'spinners-react';
import { ItemsDetail } from './ItemsDetailStyled';

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
      <ItemsDetail>
        <div className="center">
            {(product.length === 0) ? 
              <SpinnerRoundFilled 
              size={58} 
              thickness={116} 
              speed={93} 
              color="rgba(57, 172, 105, 1)" /> 
            :<ItemDetail name={product[0].nombre}
            img={product[0].url} 
            price={product[0].precio}
            product={product[0]}/>}
         </div>
         </ItemsDetail>  
    )
  
}
