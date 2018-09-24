import * as React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Squares from "./components/Squares";
import CurrentPlayer from "./components/CurrentPlayer";
import Winner from "./components/Winner";
import Draw from "./components/Draw";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Squares />
          <CurrentPlayer />
          <Winner />
          <Draw />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
