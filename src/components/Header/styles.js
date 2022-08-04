import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 80px;

  background: #f5f5f5;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 120px;
    justify-content: center;
  }

  figure {
    margin-left: 50px;
  }

  div {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;

    margin-right: 200px;

    width: 365px;
    height: 60px;

    @media screen and (max-width: 768px) {
      margin: auto;
    }

    form {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    input {
      box-sizing: border-box;
      padding: 22px 7px;
      font-family: "Inter";
      border: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      border: 2px solid #e0e0e0;
      border-radius: 8px;

      width: 100%;
      height: 50px;

      color: #e0e0e0;
    }
  }
`;
