import * as React from "react";
import { SessionProvider, SessionContext } from "./SessionContext";
import { Player, Room } from "../../interfaces";
import { addRoomToCache } from "../../functions";

export function Session(props: React.Props<Element>) {
  let [state, setState] = React.useState({} as SessionContext);

  function login(player: Player, room: Room) {
    addRoomToCache(room);
    setState({ room, player } as SessionContext);
  }

  let context = { ...state, login };

  return <SessionProvider value={context}>{props.children}</SessionProvider>;
}
