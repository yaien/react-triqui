import * as React from "react";
import { GameContext } from "./core";
import { PlayerImage } from "./PlayerImage";
import { Backdrop } from "./Backdrop";
import { ResultButton } from "./ResultButton";
import { Status } from "triqui";
import styled from "styled-components";

const PlayerContent = styled.div`
  display: block;
  width: 30vh;
  height: 30vh;
`;

export function Winner() {
  let { isEnd, result, reset } = React.useContext(GameContext);
  if (isEnd && result.status === Status.Win) {
    return (
      <Backdrop>
        <PlayerContent>
          <PlayerImage player={result.winner} />
        </PlayerContent>
        <h2>HA GANADO</h2>
        <ResultButton onClick={reset}>VOLVER A JUGAR</ResultButton>
      </Backdrop>
    );
  }
  return null;
}

export default Winner;
