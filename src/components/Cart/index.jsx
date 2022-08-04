import React from "react";
import CartTotal from "../CartTotal";

import { Container } from "./styles";

function Cart({ setCurrentSale, currentSale }) {
  function remove(index) {
    const itemsFiltered = currentSale.filter(
      (cartItem, indexArr) => index !== indexArr
    );
    setCurrentSale(itemsFiltered);
  }
  return (
    <>
      {currentSale.length === 0 ? (
        <Container>
          <div className="cart">
            <h1>Carrinho de compras</h1>
          </div>
          <div className="bag">
            <h1>Sua sacola está vazia</h1>
            <span className="span">Adicione itens</span>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="cart">
            <h1>Carrinho de compras</h1>
          </div>
          {currentSale?.map(({ img, name, category, id }, index) => (
            <>
              <div key={index} className="itemsCart">
                <div className="imgCart">
                  <img src={img} alt={name} />
                </div>
                <div className="description">
                  <h1>{name}</h1>
                  <button onClick={() => remove(index)}>Remover</button>
                </div>
                <span>{category}</span>
              </div>
            </>
          ))}

          <CartTotal
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          />
        </Container>
      )}
    </>
  );
}

export default Cart;
