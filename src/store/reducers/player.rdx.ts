import { Player } from "../variables";
import { NEXT_PLAYER } from "../types";
import { Action } from "redux";

type Payload = Action<typeof NEXT_PLAYER>;

const players = [Player.Circle, Player.Cross];

function random(): Player {
  let index = Math.round(Math.random());
  return players[index];
}

function next(player: Player): Player {
  let index = players.indexOf(player);
  if (index == players.length - 1) return players[0];
  return players[index + 1];
}

function player(state = random(), payload: Payload): Player {
  return payload.type == NEXT_PLAYER ? next(state) : state;
}

export default { player };
