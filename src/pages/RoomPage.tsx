import * as React from "react";
import { Container } from "../components/shared";
import { Player } from "../interfaces";
import { Join, PlayerList } from "../components/room";
import { RouteComponentProps } from "react-router-dom";

export function RoomPage(props: RouteComponentProps) {
  let players: Player[] = [
    { _id: "1", name: "Player X" },
    { _id: "2", name: "Player Y" }
  ];
  return (
    <Container>
      <Join />
      <PlayerList players={players} />
    </Container>
  );
}
