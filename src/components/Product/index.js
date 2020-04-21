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
        <div className="col product__qty">
          { product.qty
            ? (
                <>
                  In the cart:
                  &nbsp;

                  <button className="btn btn-danger"
                    onClick={cartUpdate.bind(null, product.id, -1)}>
                  &nbsp;-&nbsp;
                  </button>

                  &nbsp;&nbsp;
                  {product.qty}
                  &nbsp;&nbsp;

                  <button className="btn btn-success"
                    onClick={cartUpdate.bind(null, product.id, 1)}>
                  &nbsp;+&nbsp;
                  </button>

                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <button className="btn btn-warning"
                    onClick={cartUpdate.bind(null, product.id, -product.qty)}>
                    Remove
                  </button>
                </>
              )
            : <button className="btn btn-primary btn-block"
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
