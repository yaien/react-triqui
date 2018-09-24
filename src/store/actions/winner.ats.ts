import { ACreator } from "./action";
import { Triqui, Player } from "../variables";
import { flatten } from "lodash";
import { SET_WINNER, RESET_GAME, DRAW } from "../types";

type Combo = [number, number, number];

const combinations: Combo[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

export const checkWinner: ACreator = (player: Player) => {
  return (dispatch, getState) => {
    let state = flatten(getState().squares);
    let result = combinations.some(combo =>
      combo.every(pos => state[pos] == player)
    );
    if (result) dispatch({ type: SET_WINNER, winner: player });
  };
};

export const checkDraw: ACreator = () => (dispatch, getState) => {
  let state = flatten(getState().squares);
  let draw = state.every(player => player != Player.Non);
  if (draw) dispatch({ type: DRAW });
};

export const resetGame = () => ({
  type: RESET_GAME
});
