import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  max-width: 800px;
  margin: 20px auto;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
