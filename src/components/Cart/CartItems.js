import React from 'react'

const CartItems = ({name, description, img, category}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={`../images/${img}`} alt={name}/>
        </div>
    )
}

export default CartItems;
