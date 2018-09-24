import * as React from "react";
import { alter } from "../store/actions/squares.ats";
import { connect } from "react-redux";
import { Player } from "../store/variables";
import PlayerImage from "./PlayerImage";

export interface Props {
  player: Player;
  row: number;
  column: number;
  alter: (row: number, column: number) => void;
}

class PlayerSquare extends React.Component<Props> {
  update = () => {
    this.props.alter(this.props.row, this.props.column);
  };

  render() {
    return (
      <div className="square" onClick={this.update}>
        <PlayerImage player={this.props.player} />
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  alter: (row, column) => dispatch(alter(row, column))
});

export default connect(
  null,
  mapDispatch
)(PlayerSquare);
