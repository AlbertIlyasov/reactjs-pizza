import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Product({ product }) {
  return (
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
          <input type="text" name={`qty[${product.id}]`}/>{product.qty}
          <button className="btn btn-success">+</button>
        </div>
        <div className="product__add col-12 col-md-6">
          <button className="btn btn-primary btn-block"
            product_id={product.id} onClick={() => console.log(product.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
