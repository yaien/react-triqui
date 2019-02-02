import * as React from "react";
import { useGame } from "./hook";
import { createContext } from "react";

type State = ReturnType<typeof useGame>;

export const GameContext = createContext<State>(null);
export const GameProvider = GameContext.Provider;
export const GameConsumer = GameContext.Consumer;

export function Game(props: React.Props<Element>) {
  let game = useGame();
  return <GameProvider value={game}>{props.children}</GameProvider>;
}
