import * as React from "react";
import PlayerSquare from "./PlayerSquare";
import { GameContext } from "../core";
import { Player } from "triqui";

export interface RowProps {
  row: Player[];
  rowIndex: number;
}

export function Row({ row, rowIndex }: RowProps) {
  return (
    <div className="row">
      {row.map((player, colIndex) => (
        <PlayerSquare
          key={colIndex}
          row={rowIndex}
          player={player}
          column={colIndex}
        />
      ))}
    </div>
  );
}

function Squares() {
  let { game } = React.useContext(GameContext);
  return (
    <div className="wrapper">
      {game.map((row, rowIndex) => (
        <Row key={rowIndex} row={row} rowIndex={rowIndex} />
      ))}
    </div>
  );
}

export default Squares;
