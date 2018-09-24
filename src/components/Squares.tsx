import * as React from "react";
import { connect } from "react-redux";
import { Triqui, Player } from "../store/variables";
import PlayerSquare from "./PlayerSquare";

export interface SquaresProps {
  squares: Triqui;
}

export interface RowProps {
  row: Player[];
  rowIndex: number;
}

const Row = ({ row, rowIndex }: RowProps) => (
  <div className="row">
    {row.map((player, colIndex) => (
      <PlayerSquare
        key={colIndex}
        row={rowIndex}
        player={player}
        column={colIndex}
      />
    ))}
  </div>
);

class Squares extends React.Component<SquaresProps> {
  render() {
    return (
      <div className="wrapper">
        {this.props.squares.map((row, rowIndex) => (
          <Row key={rowIndex} row={row} rowIndex={rowIndex} />
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  squares: state.squares
});

export default connect(mapState)(Squares);
