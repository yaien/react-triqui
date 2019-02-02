import * as React from "react";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import empty from "../assets/empty.svg";
import { Player } from "triqui";

interface Props {
  player: Player;
}

export function PlayerImage(props: Props) {
  switch (props.player) {
    case Player.Circle:
      return <img src={circle} />;
    case Player.Cross:
      return <img src={cross} />;
    default:
      return <img src={empty} />;
  }
}

export default PlayerImage;
