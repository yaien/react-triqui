import * as React from "react";
import PlayerImage from "./PlayerImage";
import { GameContext } from "../core";
import { Status } from "triqui";

export function Winner() {
  let { isEnd, result, reset } = React.useContext(GameContext);
  if (isEnd && result.status === Status.Win) {
    return (
      <div className="winner">
        <div className="player">
          <PlayerImage player={result.winner} />
        </div>
        <h2>HA GANADO</h2>
        <button className="btn" onClick={reset}>
          VOLVER A JUGAR
        </button>
      </div>
    );
  }
  return null;
}

export default Winner;
