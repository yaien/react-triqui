import styled from "styled-components";

export const Item = styled.div`
  padding: 2%;
  background: #fff;
  border: darkblue solid 1px;
  font-size: large;
  font-weight: bold;
  user-select: none;
  :hover {
    background-color: darkblue;
    color: white;
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
