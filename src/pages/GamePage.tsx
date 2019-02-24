import * as React from "react";
import { Game, Squares, CurrentPlayer, Winner, Draw } from "../components/game";
import { SessionContext } from "../components/session";
import { Redirect } from "react-router-dom";

export function GamePage() {
  let session = React.useContext(SessionContext);

  if (!session.player) return <Redirect to="/" />;

  return (
    <Game>
      <h1>Game</h1>
    </Game>
  );
}
