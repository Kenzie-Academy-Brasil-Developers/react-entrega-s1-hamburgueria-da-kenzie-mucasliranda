import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProducsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [filterValue, setFilterValue] = useState("")
  const [cartTotal, setCartTotal] = useState(0)

  useEffect( () => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response)
        setFilteredProducts(response)})
  },[])

  const toFilter = (value) => {

    if(value !== " ") {

      setFilteredProducts(products.filter( (each) => {
        return each.name.toLowerCase().includes(value.toLowerCase()) || each.category.toLowerCase().includes(value.toLowerCase())
      }))

    }

    // console.log(value)

  }

  const toCart = (id) => {

    let variavel = currentSale.find( (each) => {return each.id === id})

    if(!!!variavel){
      setCurrentSale([...currentSale , ...products.filter( (product) => {
        return product.id === id
      })])
    }
  }

  const removeAll = () => {
    setCurrentSale([])
  }

  const removeOne = (id) => {

    setCurrentSale(currentSale.filter( (product) => {
      return product.id !== id
    }))

  }

  useEffect( () => {
    setCartTotal(
      currentSale.reduce ( (a, b) => {
        return a + b.price
    }, 0).toFixed(2))
    console.log(currentSale)
  },[currentSale])

  return (
    <div className="App">
      <Header toFilter={toFilter} filterValue={filterValue} setFilterValue={setFilterValue} />
      <main  >
        <ProducsList filteredProducts={filteredProducts} toCart={toCart} filterValue={filterValue} setFilterValue={setFilterValue} />
        <Cart currentSale={currentSale} cartTotal={cartTotal} removeAll={removeAll} removeOne={removeOne} />
      </main>
    </div>
  );
}

export default App;
