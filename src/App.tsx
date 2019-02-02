import * as React from "react";
import Squares from "./components/Squares";
import CurrentPlayer from "./components/CurrentPlayer";
import Winner from "./components/Winner";
import Draw from "./components/Draw";
import { Game } from "./core/game";

class App extends React.Component {
  render() {
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
}

export default App;
