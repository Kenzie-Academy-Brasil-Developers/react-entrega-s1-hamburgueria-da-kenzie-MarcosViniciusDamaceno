import styled from "styled-components";

export const TotalValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;

  border-top: 2px solid #e0e0e0;

  width: 335px;
  height: 140px;

  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 365px;

    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;

      margin-left: 15px;

      color: #333333;
    }

    .somaTotal {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;

      margin-right: 20px;

      color: #828282;
    }
  }

  button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 343px;
    height: 60px;

    background: #e0e0e0;

    border: 2px solid #e0e0e0;
    border-radius: 8px;

    color: #828282;
  }
`;
