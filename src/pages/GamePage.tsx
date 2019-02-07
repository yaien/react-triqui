import * as React from "react";
import { Game } from "../core";
import Squares from "../components/Squares";
import CurrentPlayer from "../components/CurrentPlayer";
import Winner from "../components/Winner";
import Draw from "../components/Draw";

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
