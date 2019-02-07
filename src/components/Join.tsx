import * as React from "react";
import { Card } from "./shared/Card";
import { Input } from "./shared/Input";
import { Button } from "./shared/Button";

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
