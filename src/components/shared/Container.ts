import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
