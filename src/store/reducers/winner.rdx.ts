import { Player } from "../variables";
import { SET_WINNER, RESET_GAME, DRAW } from "../types";

export interface SetWinner {
  type: typeof SET_WINNER;
  winner: Player;
}

export interface ResetGame {
  type: typeof RESET_GAME;
}

type Action = SetWinner | ResetGame;

function winner(state: Player = null, payload: Action): Player {
  switch (payload.type) {
    case SET_WINNER:
      return payload.winner;
    case RESET_GAME:
      return null;
  }
  return state;
}

interface SetDraw {
  type: typeof DRAW;
}

type DrawAction = SetDraw | ResetGame;

function draw(state = false, payload: DrawAction) {
  switch (payload.type) {
    case DRAW:
      return true;
    case RESET_GAME:
      return false;
  }
  return state;
}

export default { winner, draw };
