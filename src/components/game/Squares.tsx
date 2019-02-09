import * as React from "react";
import PlayerSquare from "./PlayerSquare";
import { GameContext } from "./core";
import { Player } from "triqui";
import styled from "styled-components";

const Flex = styled.div`
  flex-grow: 1;
  display: flex;
`;

export interface RowProps {
  row: Player[];
  rowIndex: number;
}

export function Row({ row, rowIndex }: RowProps) {
  return (
    <Flex>
      {row.map((player, colIndex) => (
        <PlayerSquare
          key={colIndex}
          row={rowIndex}
          player={player}
          column={colIndex}
        />
      ))}
    </Flex>
  );
}

const Wrapper = styled.div`
  height: 80vh;
  width: 80vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;

  @media (max-width: 970px) {
    height: 90vw;
    width: 90vw;
  }
`;

export function Squares() {
  let { game } = React.useContext(GameContext);
  return (
    <Wrapper>
      {game.map((row, rowIndex) => (
        <Row key={rowIndex} row={row} rowIndex={rowIndex} />
      ))}
    </Wrapper>
  );
}

export default Squares;
