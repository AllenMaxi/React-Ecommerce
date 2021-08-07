import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from 'components/Item';
import { ProductStyles } from 'components/styles/ProductsStyle'
import { getFirestore } from 'components/functions/firebaseService';
import "../components/styles/Spinner.css";

const Products = () => {
    const [products, setProducts] = useState([])
    let {categoryID} = useParams()
    

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
      {(products.length === 0) ? 
    <div class="lds-roller"><div></div><div></div><div></div><div></div></div>
         :
    products.map(item => <div key={item.nombre}><Item 
      id={item.id}
      name={item.nombre}
      description={item.description}
      price={item.precio}
      img={item.url}/>
      </div> )} 
     </ProductStyles>
    )
    }

export default Products;