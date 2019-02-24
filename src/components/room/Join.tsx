import * as React from "react";
import { Card, Input, Button, Form } from "../shared";
import axios from "axios";
import { Room, RoomAccess, RoomResponse } from "../../interfaces";
import { SessionContext } from "../session";

interface JoinProps {
  room: Room;
}

export function Join(props: JoinProps) {
  let session = React.useContext(SessionContext);
  let [player, setPlayer] = React.useState("");

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer(e.target.value);
  }

  async function join() {
    try {
      let payload = { room: props.room._id, player };
      let data = (await axios.post<RoomResponse>("/rooms/join", payload)).data;
      session.login(data.player, data.room);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <Card title="Unirte al juego">
      <Form onSubmit={join}>
        <Input label="Jugador:" value={player} onChange={change} required />
        <Button type="submit">Unirte</Button>
      </Form>
    </Card>
  );
}
