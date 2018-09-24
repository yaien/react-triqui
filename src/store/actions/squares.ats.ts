import { SET_SQUARE, NEXT_PLAYER } from "../types";
import { Player } from "../variables";
import { ACreator } from "./action";
import { checkWinner, checkDraw } from "./winner.ats";

export const alter: ACreator = (row: number, column: number) => {
  return (dispatch, getState) => {
    const { player, squares } = getState();
    if (squares[row][column] === Player.Non) {
      dispatch({ type: SET_SQUARE, row, column, player });
      dispatch({ type: NEXT_PLAYER });
      dispatch(checkWinner(player));
      dispatch(checkDraw());
    }
  };
};
