import * as React from "react";
import PlayerImage from "./PlayerImage";
import { GameContext } from "../core/game";

export function CurrentPlayer() {
  let game = React.useContext(GameContext);
  return (
    <div className="footer">
      <h5>Juega:</h5>
      <section>
        <PlayerImage player={game.state.turn} />
      </section>
    </div>
  );
}

export default CurrentPlayer;
