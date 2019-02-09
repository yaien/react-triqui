import * as React from "react";
import { Game, Squares, CurrentPlayer, Winner, Draw } from "../components/game";

export function GamePage() {
  return (
    <Game>
      <>
        <Squares />
        <CurrentPlayer />
        <Winner />
        <Draw />
      </>
    </Game>
  );
}
