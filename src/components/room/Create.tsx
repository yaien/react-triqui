import * as React from "react";
import { Card } from "../shared/Card";
import { Player } from "../../interfaces";
import { Form, Input, Button } from "../shared";

export interface CreateProps {
  onSubmit?(player: Partial<Player>): void;
}

export function Create(props: CreateProps) {
  let [name, setName] = React.useState("");

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const submit = () => {
    if (props.onSubmit) {
      props.onSubmit({ name });
    }
  };

  return (
    <Card title="Juego Nuevo">
      <Form onSubmit={submit}>
        <Input label="Jugador" required onChange={change} />
        <Button type="submit">OK</Button>
      </Form>
    </Card>
  );
}
