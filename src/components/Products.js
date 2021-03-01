import React from 'react';
import Product from "./Product";
import data from "../ProductsList.json";
import "../style.css";

function Products() {
    return (
        <section className="products">
            {data.map((product) => (
                <Product image={product.image} title={product.title} price={product.price}/>
            ))}
        </section>
    );

}

export default Products;