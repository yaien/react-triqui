import * as React from "react";
import { GameContext } from "../core";
import { Status } from "triqui";

export function Draw() {
  let { reset, result, isEnd } = React.useContext(GameContext);
  if (isEnd && result.status == Status.Draw) {
    return (
      <div className="winner">
        <h2>EMPATE!</h2>
        <button className="btn" onClick={reset}>
          VOLVER A JUGAR
        </button>
      </div>
    );
  }
  return null;
}

export default Draw;
