import { SET_SQUARE, RESET_GAME } from "../types";
import { Triqui, Player } from "../variables";
import { cloneDeep } from "lodash";
import { ResetGame } from "./winner.rdx";

interface SetSquare {
  type: typeof SET_SQUARE;
  row: number;
  column: number;
  player: Player;
}

export type Payload = SetSquare | ResetGame;

function initialState(): Triqui {
  let values = () => Array(3).fill(Player.Non);
  let triqui: Triqui = Array(3)
    .fill(null)
    .map(() => values());
  return triqui;
}

function squares(state: Triqui = initialState(), payload: Payload): Triqui {
  switch (payload.type) {
    case SET_SQUARE:
      let triqui = cloneDeep(state);
      triqui[payload.row][payload.column] = payload.player;
      return triqui;
    case RESET_GAME:
      return initialState();
  }
  return state;
}

export default { squares };
