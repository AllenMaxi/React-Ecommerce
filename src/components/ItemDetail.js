import React from 'react';
import Item from './Item';
import { ItemsDetail } from './styles/ItemsDetail';


const ItemDetail = ({name, price, img, description}) => {

    return(
        <ItemsDetail>
        <Item name={name}
        price={price}
        img={`../${img}`}
        description={description}/>
      </ItemsDetail>
    )
}

export default ItemDetail;