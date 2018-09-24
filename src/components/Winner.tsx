import * as React from "react";
import { connect } from "react-redux";
import { resetGame } from "../store/actions/winner.ats";
import PlayerImage from "./PlayerImage";
import { Player } from "../store/variables";

interface Props {
  winner: Player;
  reset: () => void;
}

class Winner extends React.Component<Props> {
  render() {
    if (!this.props.winner) return null;
    return (
      <div className="winner">
        <div className="player">
          <PlayerImage player={this.props.winner} />
        </div>
        <h2>HA GANADO</h2>
        <button className="btn" onClick={this.props.reset}>
          VOLVER A JUGAR
        </button>
      </div>
    );
  }
}

const mapState = state => ({ winner: state.winner });
const mapDispatch = dispatch => ({ reset: () => dispatch(resetGame()) });

export default connect(
  mapState,
  mapDispatch
)(Winner);
