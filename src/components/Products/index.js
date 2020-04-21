import React from 'react'
import Product from '../Product/'
import PropTypes from 'prop-types'

function Products({ products, keyword }) {
  return (
    <div className="row">
      { products
          .filter(props => !keyword || props.name.toLowerCase().includes(keyword.toLowerCase()))
          .map(props => (
              <div className="col-12 col-md-4" key={props.id}>
                <Product product={props} />
              </div>
            )
          )
      }
    </div>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired
}

export default Products
