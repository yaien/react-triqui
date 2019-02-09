import * as React from "react";
import circle from "./assets/circle.svg";
import cross from "./assets/cross.svg";
import empty from "./assets/empty.svg";
import { Player } from "triqui";
import styled from "styled-components";

const Sign = styled.img`
  width: 100%;
  height: 100%;
`;

interface Props {
  player: Player;
}

export function PlayerImage(props: Props) {
  switch (props.player) {
    case Player.Circle:
      return <Sign src={circle} />;
    case Player.Cross:
      return <Sign src={cross} />;
    default:
      return <Sign src={empty} />;
  }
}

export default PlayerImage;
