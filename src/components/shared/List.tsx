import styled, { css } from "styled-components";

const active = css`
  background-color: darkblue;
  color: white;
`;

export const Item = styled.div<{ active: boolean }>`
  padding: 2%;
  background-color: white;
  border: darkblue solid 1px;
  font-size: large;
  font-weight: bold;
  user-select: none;
  ${props => props.active && active}
  :hover {
    ${active}
  }
`;

export const List = styled.div`
  border-radius: 10px;

  ${Item}:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  ${Item}:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
