import styled from "styled-components";

export const Backdrop = styled.div`
  z-index: 100;
  background: white;
  opacity: 0.9;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
