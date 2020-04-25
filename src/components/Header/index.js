import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default () => (
    <div className="d-flex flex-column flex-md-row align-items-center p-3
    px-md-4 mb-3 bg-white border-bottom shadow-sm head">
      <h5 className="my-0 mr-md-auto font-weight-normal">Hot pizza delivery</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink to="/catalog" className="p-2 text-dark">Pizza</NavLink>
        <NavLink to="/cart" className="p-2 text-dark">Cart</NavLink>
        <NavLink to="/register" className="p-2 text-dark">Sign up</NavLink>
        <NavLink to="/login" className="p-2 text-dark">Sign in</NavLink>
      </nav>
    </div>
  )
