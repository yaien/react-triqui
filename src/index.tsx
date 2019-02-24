import * as React from "react";
import { render } from "react-dom";
import { config } from "./functions";
import App from "./App";

config();

render(<App />, document.getElementById("app"));
