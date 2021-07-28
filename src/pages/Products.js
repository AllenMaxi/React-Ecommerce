import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from 'components/functions/getProduct';
import Item from 'components/Item';
import { ProductStyles } from 'components/styles/ProductsStyle'

const Products = () => {
    const [products, setProducts] = useState([])
    let {categoryID} = useParams()


 useEffect(() => {
     if(categoryID === undefined){
        getProducts()
        .then(res => setProducts(res))
     }else{
        getProducts()
        .then(res => setProducts(res.filter(product => product.category === categoryID)))
     }
 
 }, [categoryID])

    return(
        <ProductStyles>
     <h2><span>{categoryID}</span> Products</h2>
    {products.map(item => <div key={item.name}><Item 
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      img={item.img}/>
      </div> )}
     </ProductStyles>
    )
    }

export default Products;