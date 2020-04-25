import React, { useState, useEffect } from 'react'
import Context from './context'
import Header from './components/Header/'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [title, setTitle] = useState('')
  const route = useRoutes()
  const deliveryCost = 10

  useEffect(() => {
    document.title = title + ' - Pizza Delivery - React App'
  }, [title])

  useEffect(() => {
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

  console.log('App render', new Date())
  return (
    <Context.Provider value={{
      setTitle,
      loading,
      products,
      filterProducts,
      keyword,
      cartUpdate,
      deliveryCost
    }}>
      <Router>
        <Header />
        <div className="container">
          <div className="row justify-content-center">
            <h1>{title}</h1>
          </div>
          <div className="body">
            {route}
          </div>
        </div>
        <footer/>
      </Router>
    </Context.Provider>
  )
}
