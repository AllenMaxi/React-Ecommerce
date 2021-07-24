import React, { useState, useEffect } from 'react';
import Item from './Item';
import ItemCount from './ItemCount';
import { products } from 'helpers/data';
import { SpinnerRoundFilled } from 'spinners-react';
  
const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)

 useEffect(() => {
    setLoading(true);
    const itemsList = products;
    
      const task = new Promise((resolve, reject) => {
        
          let status = 200;
          if(status === 200) {
              setTimeout(() => {
                  setLoading(false);
                  resolve(itemsList)
              }, 2000);
          }else {
              reject("rejected")
          }
      })
      const getPromise = () => {
          return task;
      }
      getPromise()
      .then((res) => setItems(res))
      .catch(err => console.log(err) )
      
 }, [])

    return(
  <div className="items-container">
      {loading && 
        <SpinnerRoundFilled 
        size={58} 
        thickness={116} 
        speed={93} 
        color="rgba(57, 172, 105, 1)" /> }
    {!loading && items.map(item => <li key={item.name}>
    <Item 
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      img={item.img} /> 
      <ItemCount stock={10} initial={1}/></li>)}
</div> 
    )
}

export default ItemList;


