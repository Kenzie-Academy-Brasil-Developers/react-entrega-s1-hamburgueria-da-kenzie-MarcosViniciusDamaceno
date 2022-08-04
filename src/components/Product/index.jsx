import React from "react";

import { Container } from "./styles";

function Product({ name, category, price, img, id, handleClick }) {
  return (
    <Container>
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <div className="description">
        <h1>{name}</h1>
        <span>{category}</span>
        <h4>R$ {price}</h4>

        <button onClick={() => handleClick(name, category, price, img, id)}>
          Adicionar
        </button>
      </div>
    </Container>
  );
}

export default Product;
