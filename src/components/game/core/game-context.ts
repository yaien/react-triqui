import { createContext } from "react";
import { useGame } from "./hook";

type State = ReturnType<typeof useGame>;
export const GameContext = createContext<State>(null);
export const GameProvider = GameContext.Provider;
export const GameConsumer = GameContext.Consumer;
