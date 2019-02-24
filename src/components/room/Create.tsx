import * as React from "react";
import { Card } from "../shared/Card";
import { Player, RoomAccess } from "../../interfaces";
import { Form, Input, Button } from "../shared";

export interface CreateProps {
  onSubmit?(payload: RoomAccess): void;
}

export function Create(props: CreateProps) {
  let [name, setName] = React.useState("");

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function submit() {
    if (props.onSubmit) {
      props.onSubmit({ player: name });
    }
  }

  return (
    <Card title="Juego Nuevo">
      <Form onSubmit={submit}>
        <Input label="Jugador" required onChange={change} />
        <Button type="submit">OK</Button>
      </Form>
    </Card>
  );
}
