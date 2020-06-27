import React, { useContext, useEffect } from 'react'
import Context from '../../context'
import Loader from '../../components/Loader/'
import Product from '../../components/Product/'

export const Catalog = () => {
  const {
    setTitle,
    loading,
    products,
    filterProducts,
    keyword
  } = useContext(Context)

  useEffect(() => setTitle('Pizza'), [setTitle])

  if (loading) {
    return <Loader />
  }

  if (!products.length) {
    return <div className="row">No products.</div>
  }

  return (
    <>
      <div className="row search-box">
        <input placeholder="Search" onChange={filterProducts} />
      </div>
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
    </>
  )
}
