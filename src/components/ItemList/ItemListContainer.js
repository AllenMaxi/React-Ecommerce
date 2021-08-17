import React from 'react';
import "./main.scss";
import ItemList from './ItemList';
import { SliderData } from 'components/Carousel/SliderData';
import ImageSlider from 'components/Carousel/ImageSlider';
import "../Carousel/Carousel.css";

export default function ItemListContainer(props) {
    
return(
    <div className="itemContainer">
        <h1>Healthy <span>Day</span> = Healthy <span>Life</span></h1>
     <ImageSlider slides={SliderData} />
        <h2>Healthy Products that will change your <span>Day</span></h2>
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

