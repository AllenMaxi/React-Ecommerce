import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { products } from 'helpers/data';
import { SpinnerRoundFilled } from 'spinners-react';
import { FlipInYDiv } from 'animations/FlipInYDiv'; 

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
    {!loading && items.map(item => <li key={item.name} className="details">
    <div className="item-name">
        <h2>{item.name}</h2>
        <h3>{item.description}</h3>
    </div>
    <div className="item-img">
      <FlipInYDiv> <img src={`images/${item.img}`} alt={item.name}/> </FlipInYDiv>
    </div>
    <h3><b>${item.price}</b></h3>
      <ItemCount id={item.id} /></li>)}
</div> 
    )
}

export default ItemList;


