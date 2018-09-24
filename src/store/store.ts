import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { Player, Triqui } from "./variables";

const middlewares = applyMiddleware(thunk);

const enhacer =
  process.env.NODE_ENV == "production"
    ? compose
    : window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export default createStore(reducers, enhacer(middlewares));

export type IState = {
  player: Player
  squares: Triqui
}