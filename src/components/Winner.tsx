import * as React from "react";
import PlayerImage from "./PlayerImage";
import { GameContext } from "../core/game";
import { Status } from "triqui";

export function Winner() {
  let { state, reset } = React.useContext(GameContext);
  let { result, isEnd } = state;
  if (!isEnd || result.status !== Status.Win) return null;
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

export default Winner;
