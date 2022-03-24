import styled from "styled-components";

export const ProdutoItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e3e3e3;
  height: 280px;
  padding: 1rem;
  border-radius: 5%;
  h2 {
    font-size: 2.4rem;
    font-family: "Times New Roman", Times, serif;
  }
  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
  p {
    font-size: 1.3rem;
  }

  @media (max-width: 760px) {
    height: 420px;
    width: initial;
  }
`;
