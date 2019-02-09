import { Player, Result } from "triqui";

export interface GameState {
  game: Player[][];
  isEnd: boolean;
  turn: Player;
  result: Result;
}
