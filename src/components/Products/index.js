import React from 'react'
import Product from '../Product/'
import PropTypes from 'prop-types'

function Products({ products }) {
  return (
    <div className="row">
      { products.map(props => (
          <div className="col-12 col-md-4" key={props.id}>
            <Product
              product={props}
            />
          </div>
        )
      ) }
    </div>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Products
