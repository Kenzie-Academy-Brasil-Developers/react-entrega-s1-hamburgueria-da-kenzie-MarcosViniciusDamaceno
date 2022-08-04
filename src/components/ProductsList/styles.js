import styled from "styled-components";

export const Container = styled.div`
  width: 1400px;
  height: 960px;

  margin-top: 32px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    height: 700px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 940px;

    height: 735px;
    @media screen and (max-width: 1024px) {
      justify-content: space-between;
      width: 850px;
    }

    @media screen and (max-width: 768px) {
      flex-wrap: nowrap;
      flex-direction: row;
      overflow: scroll;
    }
  }
`;
