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
  const cartStorageName = 'cart'
  const cart = JSON.parse(localStorage.getItem(cartStorageName)) || []

  useEffect(() => {
    const titlePieces = [title, 'Pizza Delivery - React App']
    document.title = titlePieces.filter(piece => piece).join(' - ')
  }, [title])

  useEffect(() => {
    //temporary emulate loaded data from backend
    const loadedProducts = [
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
    ]
    loadedProducts.map(props => {
      cart.map(cartItemProps => {
          if (cartItemProps.id === props.id) {
            props.qty = cartItemProps.qty
          }
        })
      return props
    })

    setProducts(loadedProducts)
    setLoading(false)
    return

    fetch('http://jsonplaceholder.typicode.com/todos?_limit=7')
      .then(response => response.json())
      .then(json => setProducts(json))
      .then(() => setLoading(false))
  }, [])

  function updateStorage() {
    localStorage.setItem(cartStorageName, JSON.stringify(
      products
        .filter(props => props.qty)
        .map(props => ({id: props.id, qty: props.qty}))
    ))
  }

  function cartUpdate(id, qty) {
    setProducts(products.map(product => {
      if (id === product.id && product.qty + qty >= 0) {
        product.qty += qty
      }
      return product
    }))
    updateStorage()
  }

  function cartClean() {
    setProducts(products.map(product => {
      product.qty = 0
      return product
    }))
    updateStorage()
  }

  function isCartEmpty() {
    return !products.filter(product => product.qty).length
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
      cartClean,
      isCartEmpty,
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
