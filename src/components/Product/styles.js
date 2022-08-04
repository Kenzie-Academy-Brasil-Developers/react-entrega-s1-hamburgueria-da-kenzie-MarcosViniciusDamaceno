import styled from "styled-components";

export const Container = styled.li`
  box-sizing: border-box;
  width: 300px;
  height: 346px;

  display: flex;
  flex-direction: column;

  background: #ffffff;

  border: 2px solid #e0e0e0;
  border-radius: 5px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    margin: 10px;
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: content-box;

    width: 296px;
    height: 150px;

    background: #f5f5f5;

    img {
      width: 162px;
      height: 162px;
    }
  }

  .description {
    width: 300px;
    height: 196px;

    display: flex;
    flex-direction: column;

    padding-left: 20px;
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      color: #333333;
    }

    span {
      bottom: 20%;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      color: #828282;
    }

    h4 {
      bottom: -33.33%;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;

      color: #27ae60;
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 20px;

      width: 106px;
      height: 40px;

      background: #27ae60;

      border: 2px solid #27ae60;
      border-radius: 8px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;

      color: #ffffff;
    }
  }
`;
