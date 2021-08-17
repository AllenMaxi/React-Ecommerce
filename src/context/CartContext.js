import React, { useState } from 'react';

const ItemCart = React.createContext({})

export function ItemCartProvider({children}) {
    const [itemsCart, setItemsCart] = useState([]);

    function removeItem(data) {
      const itemInCart = itemsCart.find(item => item.product.id === data );
      const newItemsCart = itemsCart.filter(item => item.product.id !== data)
      itemInCart.quantity > 1 ? 
      setItemsCart(itemsCart.map((item) => item.product.id === data 
      ? {...itemsCart, ...item, quantity: item.quantity - 1} : item))
      : setItemsCart(newItemsCart);
    }

    function setCart(data) {
        const idx = itemsCart.findIndex(item => data.product.id === item.product.id)
        if(idx === -1) {
          setItemsCart([...itemsCart, data])
        } else {
          const newQuantity = itemsCart[idx].quantity + data.quantity;
          console.log("newQuantity", newQuantity)
          const oldList = itemsCart.filter(old => old.product.id !== data.product.id);
          setItemsCart([...oldList, {product: data.product, quantity: newQuantity}]);
        }
    }
    function cleanList () {
      setItemsCart([]);
    }

    const price = () => {
      return itemsCart.reduce((acum, valor) => (acum + (valor.quantity * valor.product.precio)), 0)
    }

    const count = () => {
      return itemsCart.reduce((acum, valor) => acum + valor.quantity, 0);
    }

  return <ItemCart.Provider value={{
   itemsCart,
   setCart,
   removeItem,
   price,
   cleanList,
   count
  }}>
   {children}
 </ItemCart.Provider> 
}

export default ItemCart;