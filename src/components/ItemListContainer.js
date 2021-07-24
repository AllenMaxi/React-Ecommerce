import React from 'react';
import "../scss/main.scss";
import ItemCount from './ItemCount';
import ItemList from './ItemList';

export default function ItemListContainer(props) {
    
const handleCount = (cant) => {
    console.log(`usted ha agregado ${cant}`)
}

return(
    <div className="itemContainer">
        <img className="healthy-life"  src={"estilo-vida-saludable.jpg"} 
        alt="healthy life"/>
        <h1>Productos que cambiaran tu dia a dia</h1>
        <ul className="products-variety">
        {props.greeting.map(el => 
        <li className="elementList" key={el.id}>{el.name}</li>)}
        </ul>
        <div>
        <ItemList/>
        <hr/>
        <ItemCount stock={10} initial={1}
        onAdd={handleCount}/>
        <hr/>
        </div>
        
    </div>
)
}

