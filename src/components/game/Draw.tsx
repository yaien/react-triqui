import * as React from "react";
import { GameContext } from "./core";
import { Status } from "triqui";
import { Backdrop } from "./Backdrop";
import { ResultButton } from "./ResultButton";

export function Draw() {
  let { reset, result, isEnd } = React.useContext(GameContext);
  if (isEnd && result.status == Status.Draw) {
    return (
      <Backdrop>
        <h2>EMPATE!</h2>
        <ResultButton onClick={reset}>VOLVER A JUGAR</ResultButton>
      </Backdrop>
    );
  }
  return null;
}

export default Draw;
