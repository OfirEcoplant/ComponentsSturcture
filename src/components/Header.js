import React from 'react';
import Selection from "./Selection";
import "../style.css";

function Header() {
    const filterBy = ["All Jackets", "2016", "jacket", "Jackets", "layers", "Obermeyer", "Roxy", "womens"];
    const sortBy = ["Featured", "Best Selling", "Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to high",
        "Price, high to low", "Date, new to old", "Date, old to new"];
    return (
        <nav className="product-filter">
            <h1>Jackets</h1>
            <div className="sort">
                <Selection title="Filter" selectionOptions={filterBy}></Selection>
                <Selection title="Sort" selectionOptions={sortBy}></Selection>
            </div>
        </nav>
    );

}

export default Header;