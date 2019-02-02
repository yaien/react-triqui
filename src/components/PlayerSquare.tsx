import * as React from "react";
import PlayerImage from "./PlayerImage";
import { Player } from "triqui";
import { GameContext } from "../core/game";

export interface Props {
  player: Player;
  row: number;
  column: number;
}

function PlayerSquare({ column, row, player }: Props) {
  let { play } = React.useContext(GameContext);
  let update = () => play([row, column]);
  return (
    <div className="square" onClick={update}>
      <PlayerImage player={player} />
    </div>
  );
}

export default PlayerSquare;
