import { Triqui, Position } from "triqui";
import { useState } from "react";
import { GameState } from "./interfaces";

function clone(triqui: Triqui) {
  let newTriqui = new Triqui();
  return Object.assign(newTriqui, triqui);
}

function gameState(triqui?: Triqui): GameState {
  return Object.assign({}, triqui || new Triqui());
}

export function useGame() {
  let [triqui, setTriqui] = useState(new Triqui());

  const play = (pos: Position) => {
    let game = clone(triqui);
    game.play(pos);
    setTriqui(game);
  };

  const reset = () => {
    setTriqui(new Triqui());
  };

  let state = gameState(triqui);

  return { state, play, reset };
}
