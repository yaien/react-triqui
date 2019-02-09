import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GamePage } from "./pages/GamePage";
import { HomePage } from "./pages/HomePage";
import { RoomPage } from "./pages/RoomPage";
import { GlobalStyle } from "./components/shared";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/room/:id" component={RoomPage} />
          <Route path="/game" component={GamePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
