import React from 'react';

import Products from './components/Products';


const products = [
    
    {
        title : "Product 1",
        price : 10,
        description : "First product"
    },
    {
        title : "Product 2",
        price : 20,
        description : "Second product"
    }
    
    ]

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Products 
            title = {products[0].title} 
            price = {products[0].price}
            description = {products[0].description}
            >
            </Products>
            <Products 
            title = {products[1].title} 
            price = {products[1].price}
            description = {products[1].description}
            >
            </Products>
        </div>
    );
}