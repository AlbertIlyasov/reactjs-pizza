import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Cart({ products, cartUpdate }) {
  function buttons(product) {
    return (
        <>
          <button className="btn btn-primary"
            onClick={cartUpdate.bind(null, product.id, -1)}>
          &nbsp;-&nbsp;
          </button>

          <div className="cart-item__qty">{product.qty}</div>

          <button className="btn btn-primary"
            onClick={cartUpdate.bind(null, product.id, 1)}>
          &nbsp;+&nbsp;
          </button>

          &nbsp;&nbsp;&nbsp;
          <button className="btn btn-warning"
            onClick={cartUpdate.bind(null, product.id, -product.qty)}>
            Remove
          </button>
        </>
      )
  }
  let total = 0
  const shippingCost = 10
  let qty = 0
  let index = 0
  const list = products.filter(props=>props.qty).map(props => {
    total += props.price * props.qty
    qty += props.qty
    index++
    return (
      <div className="row cart-item" key={props.id}>
        <div className="col-2 col-md-1">
          <img src={props.img} width="30" alt={props.name} className="cart-item__img"/>
        </div>
        <div className="col-8 col-md cart-item__name">{index}. {props.name}</div>
        <div className="col-2 col-md-1 cart-item__price">{props.price}</div>

        <div className="col-9 col-md-4" style={{textAlign: 'center'}}>
          {buttons(props)}
        </div>
        <div className="col-3 col-md-2 cart-item__price">{props.price * props.qty}</div>
        <div className="col-0">&nbsp;</div>
      </div>
    )
  });
  if (!qty) {
    return <div className="row justify-content-center">Cart is empty.</div>
  }
  const cartSummaryNameClass = 'offset-3 col-4 offset-md-4 col-md-2 cart-summary__name'
  const cartSummaryValueClass = 'col-3 col-md-2 cart-summary__value'
  return (
    <>
      {list}
      <div className="cart-summary">
        <div className="row">
          <div className={cartSummaryNameClass}>Qty:</div>
          <div className={cartSummaryValueClass}>{qty}</div>

          <div className={cartSummaryNameClass}>Total:</div>
          <div className={cartSummaryValueClass}>
            <span className="price">{total}</span>
          </div>

          <div className={cartSummaryNameClass}>Shipping:</div>
          <div className={cartSummaryValueClass}>
            <span className="price">{shippingCost}</span>
          </div>

          <div className={cartSummaryNameClass}>Final:</div>
          <div className={cartSummaryValueClass}>
            <span className="price">{total + shippingCost}</span>
          </div>

        </div>
      </div>
    </>
  )
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartUpdate: PropTypes.func.isRequired
}

export default Cart
