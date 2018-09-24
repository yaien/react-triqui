import * as React from "react";
import { Player } from "../store/variables";
import PlayerImage from "./PlayerImage";
import { connect } from "react-redux";

interface Props {
  player: Player;
}

class CurrentPlayer extends React.PureComponent<Props> {
  render() {
    return (
      <div className="footer">
        <h5>Juega:</h5>
        <section>
          <PlayerImage player={this.props.player} />
        </section>
      </div>
    );
  }
}

const mapState = state => ({
  player: state.player
});

export default connect(mapState)(CurrentPlayer);
