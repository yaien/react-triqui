import * as React from "react";
import { Card, List, Item, Button } from "../shared";
import { Player } from "../../interfaces";
import { SessionContext } from "../session";

export interface PlayerListProps {
  players: Player[];
  onPlay(): void;
}

export function PlayerList({ players, onPlay }: PlayerListProps) {
  let { player: current } = React.useContext(SessionContext);
  return (
    <Card title="Jugadores">
      <List>
        {players.map(player => {
          let active = current && current._id == player._id;
          return (
            <Item key={player._id} active={active}>
              {player.name}
            </Item>
          );
        })}
      </List>
      <Button style={{ marginTop: "3%" }} onClick={onPlay}>
        Jugar
      </Button>
    </Card>
  );
}
