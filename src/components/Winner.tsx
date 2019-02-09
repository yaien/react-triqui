import * as React from "react";
import PlayerImage from "./PlayerImage";
import { GameContext } from "../core";
import { Status } from "triqui";
import styled from "styled-components";
import { WinnerWrapper } from "./WinnerWrapper";
import { WinnerButton } from "./WinnerButton";

const PlayerContent = styled.div`
  display: block;
  width: 30vh;
  height: 30vh;
`;

export function Winner() {
  let { isEnd, result, reset } = React.useContext(GameContext);
  if (isEnd && result.status === Status.Win) {
    return (
      <WinnerWrapper>
        <PlayerContent>
          <PlayerImage player={result.winner} />
        </PlayerContent>
        <h2>HA GANADO</h2>
        <WinnerButton onClick={reset}>VOLVER A JUGAR</WinnerButton>
      </WinnerWrapper>
    );
  }
  return null;
}

export default Winner;
