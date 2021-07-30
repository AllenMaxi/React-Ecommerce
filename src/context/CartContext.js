import React, { useState } from 'react';

const ItemCart = React.createContext({})

export function ItemCartProvider({children}) {
    const [itemsCart, setItemsCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    function removeItem(data) {
      const newItemsCart = itemsCart.filter(item => item.id !== data)
       setItemsCart(newItemsCart);
    }

    function setCart(data) {
        setItemsCart([...itemsCart, data])
    }
    
  return <ItemCart.Provider value={{itemsCart, setCart, quantity, setQuantity, removeItem}}>
           {children}
         </ItemCart.Provider> 
}

export default ItemCart;