import React, { useState } from 'react';

const ItemCart = React.createContext({})

export function ItemCartProvider({children}) {
    const [itemsCart, setItemsCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    function setCart(data) {
        setItemsCart([...itemsCart, data])
    }
    
  return <ItemCart.Provider value={{itemsCart, setCart, quantity, setQuantity}}>
           {children}
         </ItemCart.Provider> 
}

export default ItemCart;