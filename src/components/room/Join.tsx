import * as React from "react";
import { Card, Input, Button } from "../shared";

export function Join() {
  return (
    <Card title="Unirte al juego">
      <form>
        <Input label="Jugador:" />
        <Button>Unirte</Button>
      </form>
    </Card>
  );
}
