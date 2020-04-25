import React, { useContext } from 'react'
import Context from '../../context'
import PropTypes from 'prop-types'
import { cartItemButtons } from '../../pages/Cart/'
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
                <div className="cart-item">
                  {cartItemButtons(product, cartUpdate)}
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
