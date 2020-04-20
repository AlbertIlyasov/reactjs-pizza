import React, { useState, useEffect } from 'react'
import Header from './components/Header/'
import Products from './components/Products/'
import Loader from './components/Loader/'
import 'bootstrap/dist/css/bootstrap.min.css'

export default () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setProducts([
      {
        id: 10,
        img: "img/product/pizza.jpg",
        name: "Hawaiian pizza",
        price: 140.50,
        qty: 0,
      },
      {
        id: 20,
        img: "img/product/pizza.jpg",
        name: "Cheese pizza",
        price: 74,
        qty: 111,
      },
      {
        id: 30,
        img: "img/product/pizza.jpg",
        name: "Pizza №3",
        price: 33,
        qty: 0,
      },
      {
        id: 40,
        img: "img/product/pizza.jpg",
        name: "Pizza №4",
        price: 44,
        qty: 0,
      },
      {
        id: 50,
        img: "img/product/pizza.jpg",
        name: "Pizza №5",
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

  console.log('App render', new Date())
  return (
    <>
      <Header />
      <div className="container">
        { loading
          ? <Loader />
          : ( products.length
            ? <Products products={products} />
            : <div>No products.</div>
          )
        }
      </div>
    </>
  )
}
