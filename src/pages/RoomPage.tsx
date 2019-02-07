import * as React from "react";
import { Container } from "../components/shared/Container";
import { Player } from "../interfaces";
import { Join } from "../components/Join";
import { PlayerList } from "../components/PlayerList";

export function RoomPage() {
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
