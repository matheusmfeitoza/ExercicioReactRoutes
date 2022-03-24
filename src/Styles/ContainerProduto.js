import styled from "styled-components";

export const ContainerProduto = styled.section`
  display: grid;
  grid-template-columns: 400px 1fr 1fr;
  margin-top: 20px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
