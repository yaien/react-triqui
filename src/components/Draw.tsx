import * as React from "react";
import { GameContext } from "../core";
import { Status } from "triqui";
import { WinnerWrapper } from "./WinnerWrapper";
import { WinnerButton } from "./WinnerButton";

export function Draw() {
  let { reset, result, isEnd } = React.useContext(GameContext);
  if (isEnd && result.status == Status.Draw) {
    return (
      <WinnerWrapper>
        <h2>EMPATE!</h2>
        <WinnerButton onClick={reset}>VOLVER A JUGAR</WinnerButton>
      </WinnerWrapper>
    );
  }
  return null;
}

export default Draw;
