import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Header({ activatePage }) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4
    mb-3 bg-white border-bottom shadow-sm head">
      <h5 className="my-0 mr-md-auto font-weight-normal">Hot pizza delivery</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <span className="p-2 text-dark head__item"
          onClick={activatePage.bind(null, 'pizza')}>
          Pizza</span>
        <span className="p-2 text-dark head__item"
          onClick={activatePage.bind(null, 'cart')}>
          Cart</span>
      </nav>
      <span>Sign up</span>
    </div>
  )
}

Header.propTypes = {
  activatePage: PropTypes.func.isRequired
}

export default Header
