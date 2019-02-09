import * as React from "react";
import { Create } from "../components/room/";
import { Container } from "../components/shared/Container";

export function HomePage() {
  return (
    <Container>
      <Create />
    </Container>
  );
}
