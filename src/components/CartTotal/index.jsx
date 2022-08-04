import React from "react";

import { TotalValue } from "./styles";

function CartTotal({ setCurrentSale, currentSale }) {
  function removeAll() {
    setCurrentSale([]);
  }
  const ValorTotal = currentSale?.reduce(
    (valorAnterior, ValorAtual) =>
      ValorAtual.type === "saída"
        ? valorAnterior - ValorAtual.price
        : valorAnterior + ValorAtual.price,
    0
  );

  return (
    <TotalValue>
      <div>
        <h3>Total</h3>
        <h2 className="somaTotal">
          {ValorTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
      </div>
      <button onClick={removeAll}>Remover todos</button>
    </TotalValue>
  );
}

export default CartTotal;
