import React from 'react';
import "./main.scss";
import ItemList from './ItemList';

export default function ItemListContainer(props) {
    
return(
    <div className="itemContainer">
        <img className="healthy-life"  src={"../images/estilo-vida-saludable.jpg"} 
        alt="healthy life"/>
        <h1>Healthy Products that will change your <span>Day</span></h1>
        <ul className="products-variety">
        {props.greeting.map(el => 
        <li className="elementList" key={el.id}>{el.name}</li>)}
        </ul>
        <div>
        <ItemList/>
        </div>
        
    </div>
)
}

