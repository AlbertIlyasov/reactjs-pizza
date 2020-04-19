import React from "react";

const Product = product => (
  <div className="product container">
    <div className="product__img row">
      <img src={product.img} alt={product.name}/>
    </div>
    <div className="product__title row">
      {product.name}
    </div>
    <div className="product__price row">
      {product.price}
    </div>
    <div className="row">
      <div className="product__count col-12 col-md-6">
        <button className="btn btn-danger">-</button>
        <input type="text" name="qty[1]"/>
        <button className="btn btn-success">+</button>
      </div>
      <div className="product__add col-12 col-md-6">
        <button className="btn btn-primary btn-block">Add to cart</button>
      </div>
    </div>
  </div>
);

export default Product;
