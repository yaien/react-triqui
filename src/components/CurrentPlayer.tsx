import * as React from "react";
import PlayerImage from "./PlayerImage";
import { GameContext } from "../core";

export function CurrentPlayer() {
  let { turn } = React.useContext(GameContext);
  return (
    <div className="footer">
      <h5>Juega:</h5>
      <section>
        <PlayerImage player={turn} />
      </section>
    </div>
  );
}

export default CurrentPlayer;
