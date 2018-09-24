import * as React from "react";
import { connect } from "react-redux";
import { resetGame } from "../store/actions/winner.ats";

interface Props {
  draw: boolean;
  reset: () => void;
}

class Draw extends React.Component<Props> {
  render() {
    if (!this.props.draw) return null;
    return (
      <div className="winner">
        <h2>EMPATE!</h2>
        <button className="btn" onClick={this.props.reset}>
          VOLVER A JUGAR
        </button>
      </div>
    );
  }
}

const mapState = state => ({ draw: state.draw });
const mapDispatch = dispatch => ({ reset: () => dispatch(resetGame()) });

export default connect(
  mapState,
  mapDispatch
)(Draw);
