import Cart from "../Cart";
import Product from "../Product";

import { Container } from "./styles";

const ProductsList = ({
  products,
  handleClick,
  currentSale,
  setCurrentSale,
}) => {
  return (
    <Container>
      <ul>
        {products?.map(({ name, img, category, price, id }) => (
          <Product
            name={name}
            img={img}
            category={category}
            price={price}
            id={id}
            key={id}
            handleClick={handleClick}
          />
        ))}
      </ul>
      <Cart setCurrentSale={setCurrentSale} currentSale={currentSale} />
    </Container>
  );
};

export default ProductsList;
