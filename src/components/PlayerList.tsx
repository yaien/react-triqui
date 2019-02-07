import * as React from "react";
import { Card } from "./shared/Card";
import { List, Item } from "./shared/List";
import { Player } from "../interfaces";
import { Button } from "./shared/Button";

export interface PlayerListProps {
  players: Player[];
}

export function PlayerList({ players }: PlayerListProps) {
  return (
    <Card title="Jugadores">
      <List>
        {players.map(player => (
          <Item key={player._id}>{player.name}</Item>
        ))}
      </List>
      <Button style={{ marginTop: "3%" }}>Jugar</Button>
    </Card>
  );
}
