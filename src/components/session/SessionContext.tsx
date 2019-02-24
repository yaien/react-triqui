import * as React from "react";
import { Player, Room } from "../../interfaces";

export interface SessionContext {
  player: Player;
  room: Room;
  login(player: Player, room: Room): void;
}

export const SessionContext = React.createContext<SessionContext>(null);
export const SessionProvider = SessionContext.Provider;
export const SessionConsumer = SessionContext.Consumer;
