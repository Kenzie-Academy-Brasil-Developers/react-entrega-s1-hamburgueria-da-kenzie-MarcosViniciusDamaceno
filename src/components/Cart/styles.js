import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 365px;
  height: 500px;
  margin-top: 15px;

  border-radius: 0px 0px 5px 5px;

  @media screen and (max-width: 768px) {
    overflow: scroll;
  }

  .itemsCart {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    align-content: center;

    padding: 5px;

    background: #f5f5f5;

    flex-wrap: wrap;

    margin-bottom: 10px;
    position: relative;
  }
  .imgCart {
    width: 80px;
    height: 80px;
    background: #e0e0e0;
    border-radius: 5px;

    img {
      width: 70px;
      height: 70px;
      /*         flex-shrink: 0;
        background-size: cover; */
    }
  }

  .description {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 260px;

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;

      color: #333333;
    }

    button {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;

      color: #bdbdbd;

      border: none;
    }
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #828282;

    position: absolute;
    top: 50px;
    left: 100px;
  }

  .cart {
    width: 365px;
    height: 65px;

    background: #27ae60;
    border-radius: 5px 5px 0px 0px;

    h1 {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      color: #ffffff;
    }
  }

  .bag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 50px 10px;

    width: 345px;
    height: 158px;

    background: #f5f5f5;
    border-radius: 0px 0px 5px 5px;

    position: relative;

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      text-align: center;

      color: #333333;
    }

    .span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;

      text-align: center;

      color: #828282;

      position: absolute;

      top: 100px;
      left: 145px;
    }
  }
`;
