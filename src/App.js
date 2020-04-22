import React, { useState, useEffect } from 'react'
import Header from './components/Header/'
import Products from './components/Products/'
import Loader from './components/Loader/'
import Cart from './components/Cart/'
import Context from './Context'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [page, setPage] = useState('pizza')

  let pageName
  const pageNames = [
    {
      page: 'pizza',
      pageName: 'Pizza',
    },
    {
      page: 'cart',
      pageName: 'Cart',
    }
  ]
  pageNames
    .filter(props => props.page === page)
    .map(props => pageName = props.pageName)

  useEffect(() => {
    document.title = 'Pizza Delivery - React App'
    setProducts([
      {
        id: 10,
        img: 'img/product/pizza.jpg',
        name: 'Hawaiian pizza',
        price: 140,
        qty: 0,
      },
      {
        id: 20,
        img: 'img/product/pizza.jpg',
        name: 'Cheese pizza',
        price: 74,
        qty: 1,
      },
      {
        id: 30,
        img: 'img/product/pizza.jpg',
        name: 'Pepperoni pizza',
        price: 333,
        qty: 10,
      },
      {
        id: 40,
        img: 'img/product/pizza.jpg',
        name: 'Spicy pizza',
        price: 44,
        qty: 0,
      },
      {
        id: 50,
        img: 'img/product/pizza.jpg',
        name: 'Chicken pizza',
        price: 55,
        qty: 0,
      },
    ])
    setLoading(false)
    return

    // fetch('index.php')
    fetch('http://jsonplaceholder.typicode.com/todos?_limit=7')
      .then(response => response.json())
      .then(json => setProducts(json))
      .then(() => setLoading(false))
  }, [])

  function cartUpdate(id, qty) {
    setProducts(products.map(product => {
      if (id === product.id && product.qty + qty >= 0) {
        product.qty += qty
      }
      return product
    }))
  }

  function filterProducts(e) {
    setKeyword(e.target.value.trim())
  }

  function activatePage(page) {
    setPage(page)
  }

  console.log('App render', new Date())
  return (
    <Context.Provider value={{cartUpdate}}>
      <Header page={page} activatePage={activatePage} />
      <div className="container">
        <div className="row justify-content-center">
          <h1>{pageName}</h1>
        </div>
        { 'pizza' === page &&
          ( loading
            ? <Loader />
            : ( products.length
              ? (
                  <>
                    <div className="row search-box">
                      <input placeholder="Search" onChange={filterProducts} />
                    </div>
                    <Products products={products} keyword={keyword} />
                  </>
                )
              : <div>No products.</div>
            )
          )
        }
        { 'cart' === page &&
          ( loading
            ? <Loader />
            : <Cart products={products} cartUpdate={cartUpdate}/>
          )
        }
      </div>
      <footer/>
    </Context.Provider>
  )
}
