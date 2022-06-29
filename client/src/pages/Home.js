import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="container">
      {/* these components doesnt have any params, because the we wrap them up with the provider in the app.js  */}
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
