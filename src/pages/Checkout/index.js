import React, { useState, useEffect, useContext } from 'react'
import Context from '../../context'
import './index.css'

export const Checkout = () => {
  const {
    setTitle,
    products,
    cartClean,
    isCartEmpty
  } = useContext(Context)
  const checkoutStorageName = 'checkout'
  const [checkout, setCheckout] = useState(
    JSON.parse(localStorage.getItem(checkoutStorageName))
    || {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      address2: ''
    }
  )
  const [statusOrder, setStatusOrder] = useState(null)

  useEffect(() => setTitle('Checkout'), [setTitle])

  function handleChange(e) {
    const changedCheckout = {...checkout}
    changedCheckout[e.target.id] = e.target.value
    setCheckout(changedCheckout)

    localStorage.setItem(
      checkoutStorageName,
      JSON.stringify(changedCheckout)
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    const isSuccess = sendOrder()
    if (isSuccess) {
      cartClean()
    }
    setStatusOrder(isSuccess)
  }

  function sendOrder() {
    const order = {
      customer: checkout,
      items: products
      .filter(props => props.qty)
      .map(props => {
        return {
          'id': props.id,
          'qty': props.qty
        }
      })
    }
    console.log('Emulation of sending the order', order)
    return true
  }

  if (statusOrder) {
    return (
      <div className="row alert alert-success">
        Thank you! The order was successfully sent.
      </div>
    )
  }

  if (isCartEmpty()) {
    return (
      <div className="row justify-content-center">
        Nothing to order. Cart is empty.
      </div>
    )
  }

  return (
    <form className="checkout" method="get" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="firstName">First name</label>
          <input type="input" className="form-control" id="firstName"
            value={checkout.firstName} onChange={handleChange}/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="lastName">Last name</label>
          <input type="input" className="form-control" id="lastName"
            value={checkout.lastName} onChange={handleChange}/>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="phone">Phone</label>
          <input type="tel" className="form-control" id="phone"
            value={checkout.phone} onChange={handleChange}/>
        </div>
        <div className="form-row form-group col-md-6">
          <label htmlFor="email">E-mail <span className="text-muted">
            (Optional)</span></label>
          <input type="email" className="form-control" id="email"
            placeholder="you@example.com"
            value={checkout.email} onChange={handleChange}/>
        </div>
      </div>
      <div className="form-row form-group">
        <label htmlFor="address">Address</label>
        <input type="text" className="form-control" id="address"
          placeholder="1234 Main St"
          value={checkout.address} onChange={handleChange}/>
      </div>
      <div className="form-row form-group">
        <label htmlFor="address2">Address 2</label>
        <input type="text" className="form-control" id="address2"
          placeholder="Apartment, studio, or floor"
          value={checkout.address2} onChange={handleChange}/>
      </div>
      {statusOrder !== true && statusOrder !== null && (
        <div className="row alert alert-danger">
          Error in the order submission process.
          Please try again.
        </div>
      )}
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <button type="submit"
            className="btn btn-primary btn-block checkout__button">
            Order</button>
        </div>
      </div>
    </form>
  )
}
