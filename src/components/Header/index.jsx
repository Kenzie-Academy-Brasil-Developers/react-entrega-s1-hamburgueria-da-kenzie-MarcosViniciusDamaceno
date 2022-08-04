import React, { useState } from "react";
import Button from "../Button";
import Logo from "./Logo.svg";
import { Container } from "./styles";

function Header({ setFilteredProducts, products }) {
  const [checkWrite, setCheckWrite] = useState("");

  function searchProducts(event) {
    event.preventDefault();
    if (checkWrite === "") {
      setFilteredProducts(products);
    } else {
      const productsFiltered = products.filter((product) => {
        const name = product.name.toLowerCase();
        const category = product.category.toLowerCase();
        const search = checkWrite.toLowerCase();
        if (name.includes(search) || category.includes(search)) {
          return product;
        }
      });
      console.log(productsFiltered);
      productsFiltered.length > 0
        ? setFilteredProducts(productsFiltered)
        : setFilteredProducts(products);
    }
  }
  return (
    <Container>
      <figure>
        <img src={Logo} alt="" />
      </figure>
      <div className="teste">
        <form onSubmit={searchProducts}>
          <input
            type="text"
            onChange={(e) => setCheckWrite(e.target.value)}
            name="pesquisa"
            placeholder="Digitar Pesquisa"
          />
          <Button />
        </form>
      </div>
    </Container>
  );
}

export default Header;
