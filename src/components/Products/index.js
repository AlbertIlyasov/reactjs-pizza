import React from 'react';
import Product from '../Product/';
import 'bootstrap/dist/css/bootstrap.min.css';

class Products extends React.Component {

  state = {
    products: undefined
  };

  getProducts = async () => {
    this.state.products = [
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
        qty: 0,
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
    ];
    if (this.state.products !== undefined) {
      return this.state.products;
    }
    await this.loadProducts();
    return await this.state.products;
  }

  loadProducts = async () => {
    console.log('loadProducts');
    let url = 'index.php';
    let response = await fetch(url);
    console.log(response);
    this.state.products = await response.json();
  }

  render() {
    this.getProducts();
    console.log(this.state.products);
    let products = this.state.products.map(product => {
      return (
        <div className="col-12 col-md-4">
          <Product
            img={product.img}
            name={product.name}
            price={product.price}
            qty={product.qty}
          />
        </div>
      );
    });

    return (
      <div className="row">
        {products}
      </div>
    );
  }
}

export default Products;
