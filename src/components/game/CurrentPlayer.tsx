import * as React from "react";
import PlayerImage from "./PlayerImage";
import { GameContext } from "./core";
import styled from "styled-components";

const CurrentWrapper = styled.div`
  position: fixed;
  z-index: 20;
  background-color: transparent;
  opacity: 0.6;
  height: 8vh;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.h5`
  font-size: large;
`;

const Section = styled.section`
  height: 100%;
`;

export function CurrentPlayer() {
  let { turn } = React.useContext(GameContext);
  return (
    <CurrentWrapper>
      <Label>Juega</Label>
      <Section style={{ height: "100%" }}>
        <PlayerImage player={turn} />
      </Section>
    </CurrentWrapper>
  );
}

export default CurrentPlayer;
