import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
        <Header/>
        <Products/>
    </div>
  );
}

export default App;
