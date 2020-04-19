import React from 'react';
import Header from './components/Header/';
import Products from './components/Products/';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <div class="container">
          <Products/>
        </div>
      </>
    );
  }
}

export default App;
