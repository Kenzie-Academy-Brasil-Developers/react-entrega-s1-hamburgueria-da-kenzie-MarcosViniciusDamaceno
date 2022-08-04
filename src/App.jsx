import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  function showProducts() {}

  function handleClick(name, category, price, img, id) {
    const vefiried = currentSale.find((product) => product.id === id);
    if (!vefiried) {
      const itemCart = { name, category, price, img, id };
      setCurrentSale([...currentSale, itemCart]);
    }
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        setFilteredProducts(res);
        setProducts(res);
      });
  }, []);

  return (
    <>
      <Header setFilteredProducts={setFilteredProducts} products={products} />
      <ProductsList
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
        handleClick={handleClick}
        products={filteredProducts}
      />
    </>
  );
}

export default App;
