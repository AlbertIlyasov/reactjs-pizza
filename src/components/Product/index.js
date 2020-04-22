import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../../Context'
import './index.css'

function Product({ product }) {
  const { cartUpdate } = useContext(Context)
  return (
    <div className="container product">
      <div className="row product__img-box">
        <img src={product.img} alt={product.name} className="product__img"/>
      </div>
      <div className="row product__title">
        {product.name}
      </div>
      <div className="row product__price">
        {product.price}
      </div>
      <div className="row">
        <div className="col product__qty justify-content-center">
          { product.qty
            ? (
                <div className="justify-content-center">
                  <button className="btn btn-primary"
                    onClick={cartUpdate.bind(null, product.id, -1)}>
                  &nbsp;-&nbsp;
                  </button>

                  &nbsp;
                  {product.qty}
                  &nbsp;

                  <button className="btn btn-primary"
                    onClick={cartUpdate.bind(null, product.id, 1)}>
                  &nbsp;+&nbsp;
                  </button>

                  &nbsp;&nbsp;

                  <button className="btn btn-warning"
                    onClick={cartUpdate.bind(null, product.id, -product.qty)}>
                    Remove
                  </button>
                </div>
              )
            : <button className="btn btn-primary"
                onClick={cartUpdate.bind(null, product.id, 1)}>
                Add to cart
              </button>
          }
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
