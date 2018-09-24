import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IState } from "../store";

export type ACreator = ActionCreator<ThunkAction<void, IState, never, Action>>;
