import React from 'react';
import './Products.css';


export default function Products(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p className = "description">{props.description}</p>
        </article>
    );
}