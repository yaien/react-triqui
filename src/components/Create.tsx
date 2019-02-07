import * as React from "react";
import { Card } from "./shared/Card";
import { Input } from "./shared/Input";
import { Button } from "./shared/Button";

export function Create() {
  return (
    <Card title="Juego Nuevo">
      <form>
        <Input label="Jugador:" required />
        <Button type="submit">OK</Button>
      </form>
    </Card>
  );
}
