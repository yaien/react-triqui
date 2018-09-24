import { combineReducers } from "redux";
import squares from "./squares.rdx";
import player from "./player.rdx";
import winner from "./winner.rdx";

export default combineReducers({
  ...squares,
  ...player,
  ...winner
});
