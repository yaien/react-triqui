import * as React from "react";
import { useGame } from "./hook";
import { GameProvider } from "./game-context";
import { SessionContext } from "../../session";
import { io } from "../../../functions";

export function Game(props: React.Props<Element>) {
  let session = React.useContext(SessionContext);
  let game = useGame();

  React.useEffect(() => {
    let socket = io(session.player._id);
    socket.on("message", console.log);
    return () => socket.close();
  });

  return <GameProvider value={game}>{props.children}</GameProvider>;
}
