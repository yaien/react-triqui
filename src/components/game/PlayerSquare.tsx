import * as React from "react";
import PlayerImage from "./PlayerImage";
import { Player } from "triqui";
import { GameContext } from "./core";
import styled from "styled-components";

export interface Props {
  player: Player;
  row: number;
  column: number;
}

const Square = styled.div`
  flex-grow: 1;
  border: 2px solid lightgray;
  cursor: pointer;
  display: flex;
`;

function PlayerSquare({ column, row, player }: Props) {
  let { play } = React.useContext(GameContext);
  let update = () => play([row, column]);
  return (
    <Square onClick={update}>
      <PlayerImage player={player} />
    </Square>
  );
}

export default PlayerSquare;
