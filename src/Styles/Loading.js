import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  margin: 30px auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-right-color: transparent;
  animation: load 1s infinite;

  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
`;
