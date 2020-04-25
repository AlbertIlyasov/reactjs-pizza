import React, { useContext, useEffect } from 'react'
import Context from '../../context'
import Loader from '../../components/Loader/'
import './index.css'

function cartItemButtons(product, cartUpdate) {
  return (
    <>
      <button className="btn btn-info cart-item__button-minus"
        onClick={cartUpdate.bind(null, product.id, -1)}/>

      <div className="cart-item__qty">{product.qty}</div>

      <button className="btn btn-info cart-item__button-add"
        onClick={cartUpdate.bind(null, product.id, 1)}/>

      <button className="btn btn-warning cart-item__button-remove"
        onClick={cartUpdate.bind(null, product.id, -product.qty)}/>
    </>
  )
}

function Cart() {
  const {
    setTitle,
    loading,
    products,
    cartUpdate,
    deliveryCost
  } = useContext(Context)

  useEffect(()=>{
    setTitle('Cart')
  }, [setTitle])

  if (loading) {
    return <Loader />
  }


  let total = 0
  let qty = 0
  let index = 0

  const list = products
    .filter(props=>props.qty)
    .map(props => {
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
            {cartItemButtons(props, cartUpdate)}
          </div>
          <div className="col-3 col-md-2 cart-item__price">{props.price * props.qty}</div>
          <div className="col-0">&nbsp;</div>
        </div>
      )
    })

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
            <span className="cart-summary__price">{total}</span>
          </div>

          <div className={cartSummaryNameClass}>Delivery:</div>
          <div className={cartSummaryValueClass}>
            <span className="cart-summary__price">{deliveryCost}</span>
          </div>

          <div className={cartSummaryNameClass}>Final:</div>
          <div className={cartSummaryValueClass}>
            <span className="cart-summary__price">{total + deliveryCost}</span>
          </div>

        </div>
      </div>
    </>
  )
}

export { cartItemButtons, Cart }
