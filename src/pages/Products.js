import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from 'components/Item';
import { ProductStyles } from 'pages/ProductsStyled'
import { getFirestore } from 'components/functions/firebaseService';
import { SpinnerRoundFilled } from 'spinners-react';

const Products = () => {
    const [products, setProducts] = useState([])
    let {categoryID} = useParams()
    
    let styles = products.length > 0 ? 
    { width: '100%',
      height: "100%" } : { width: '100%',
      height: "1800px" }

 useEffect(() => {
    const db = getFirestore()
     if(categoryID === undefined){
        db.collection('Items').get()
        .then((resp) => setProducts(resp.docs.map(item => ({...item.data(), id: item.id }))) )
     }else{
        db.collection("Items").where("category", "==", categoryID).get()
        .then((resp) => setProducts(resp.docs.map(item => ({...item.data(), id: item.id}))) )
     }
 
 }, [categoryID])

    return(
        <ProductStyles>
      <div className="containerDiv" style={styles}>
      {(products.length === 0) ? 
    <SpinnerRoundFilled 
        size={58} 
        thickness={116} 
        speed={93} 
        color="rgba(57, 172, 105, 1)" /> 
         :
    products.map(item => <div key={item.nombre}><Item 
      id={item.id}
      name={item.nombre}
      description={item.description}
      price={item.precio}
      img={item.url}/>
      </div> )} 
      </div>
     </ProductStyles>
    )
    }

export default Products;